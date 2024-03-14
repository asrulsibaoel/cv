## Vue3+ FastAPI Demo

### 1.Project directory

```sh
-- backend # backend
-- api #Interface folder
   -- common # Public folder
   -- core # core folder
     -- config.py # Configuration folder
   -- crud # Database addition, deletion, modification and query folder
   -- models
     -- database # mysql table model
     -- redis # redis table model
   --register #Registration center
   -- schemas # Model folder (entity class or VO view class in Java)
   -- static # static folder
   -- utils # Tools folder
   -- Dockerfile # Backend service deployment file
   -- main.py # Project startup file
   -- requirements.txt # Required packages
--frontend
   -- src
     -- apis #Interface folder
     -- assets # Static resource folder
       -- js
         -- global.js # Global configuration file
     -- components # Encapsulated components
     -- request # encapsulated axios
     --router #routing
     -- stores # status management
     -- utils # Tool class
     -- views # page
       -- pages # Layout the content in the page
       -- Login.vue # Layout page
     --App.vue
     -- main.ts
   -- index.html # Project entry
-- demo.sql # Database (config.py in backend)
-- docker-compose.yml # All project deployment configurations (nginx, mysql, redis, backend)
```

### 2. Project start

+ backend

   ```sh
   #Install the package (go to the backend folder)
   pip install -r ./requirements.txt
  
   # Find the main function in main.py, right-click to start
   ```

+ front end

   ```sh
   #Install the package (go to the frontend folder)
   npm install
  
   # Startup project
   npm run start
   ```

## Deployment related

### 1.Project directory

```sh
-- server
	-- ...
	-- root
	-- opt
		-- containerd 
		-- docker 								# Store docker container configuration
			-- mysql							# mysql configuration
			-- nginx							# nginx configuration
				-- conf.d						
					-- default.conf				 # nginx configuration [Important]
				-- html							# Store the packaged files [Important]
				-- ...
			-- redis							# redis
			-- demo								# Project configuration
				-- frontend						# front end
				-- backend						# back end
					-- Dockerfile				# Build an image [Important] 
				-- docker-compose.yml			 # docker-compose
				-- ...
			-- ...
```


A brief introduction to Docker

+ [Using Docker-Compose in Ubuntu18.4](https://zxiaosi.com/archives/ae105511.html)
+ [Docker deployment project](https://zxiaosi.com/archives/b32496b.html)

### 3. Front-end deployment

+ Change the `API_URL_PRODUCTION` field in the `frontend/src/assets/js/global.ts` file to the server `IP`

+ Modify the `isDev` field in the `frontend/src/request/https.ts` file to `false`

   ```javascript
   // Is it a development environment?
   // const isDev: boolean = true;
   const isDev: boolean = false;
   ```

+ Run the `npm run build` command to package the file

+ Upload the files in `frontend/dist` to the server `/opt/docker/nginx/html` folder

### 4. Backend deployment

+ Modify the `IS_DEV` field in `backend/core/config.py` to `false`

   ```sh
   # IS_DEV = True # Whether to develop environment
   IS_DEV = False # Whether to develop environment
   ```
  
+ Modify some fields in `backend/core/config.py`

+ Use `Docker` to create network segments

   ```sh
   # docker network ls View network bridge segments
   # docker network create bridge segment name
  
   # app is the bridge segment name defined in docker-compose.yml
   docker network create app
   ```

+ Run `docker-compose.yml` under the `/opt/docker/demo` file

   ```sh
   docoker-compose -f /opt/docker/demo/docker-compose.yml up -d
   ```

+ Create a database named `demo` and import `demo.sql`

### 5. Nginx configuration ( `/nginx/conf.d/default.conf` )

```sh
server {
     listen 80;
     listen [::]:80;
     server_name localhost;

     #charset koi8-r;
     #access_log /var/log/nginx/host.access.log main;

     location/{
         root /usr/share/nginx/html;
         index index.html index.htm;
         try_files $uri $uri/ /index.html; # Prevent page refresh 404
     }
    
      location /static/avatar/ {
         proxy_pass http://fastapi:8000/static/avatar/;
     }

     location /api {
         client_max_body_size 5m;
         proxy_pass http://fastapi:8000; # Here localhost -> corresponding container name
         proxy_set_header Host $host;
         proxy_set_header X-Real-IP $remote_addr;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
     }
    
     # optional
     location /api/docs { # docs document address
         proxy_pass http://fastapi:8000/docs;
     }

     location /api/redoc { #redoc document address
         proxy_pass http://fastapi:8000/redoc;
     }

     location /openapi.json { # openapi address (if you proxy the above document address, be sure to add the openapi proxy)
         proxy_pass http://fastapi:8000/openapi.json;
     }

     ...
}

```

