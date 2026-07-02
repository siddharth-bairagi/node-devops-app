# Winlancer DevOps Demo App

Chhota Node.js + Express app, banaya gaya hai specifically DevOps practice ke liye —
Docker, Docker Compose, Nginx reverse proxy, aur GitHub Actions CI/CD pipeline sab isi
repo pe test kar sakte ho.

## Structure

```
node-devops-app/
├── src/
│   ├── server.js          # Express app entrypoint
│   ├── routes/users.js    # sample CRUD API
│   ├── config/db.js       # DB config placeholder
│   └── server.test.js     # jest tests
├── Dockerfile              # multi-stage build
├── docker-compose.yml      # app + nginx
├── nginx/nginx.conf        # reverse proxy config
├── .github/workflows/      # CI/CD pipeline
├── .env.example
└── package.json
```

## Run locally (no Docker)

```bash
npm install
npm run dev
# visit http://localhost:3000
```

## Run tests

```bash
npm test
```

## Run with Docker

```bash
docker build -t devops-demo .
docker run -p 3000:3000 devops-demo
```

## Run full stack (app + nginx) with Compose

```bash
docker compose up --build
# visit http://localhost (nginx proxies to app on port 3000)
```
