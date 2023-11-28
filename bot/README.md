# ![logo-nind](https://user-images.githubusercontent.com/68554315/164183654-b8324475-0db9-429e-8bfe-51080e54cec1.svg)

NiNDAO is a web3 Telegram bot that enables users to turn their group chats into fully-functioning, trustless DAO management platforms. It combines on-chain transactions with open-source protocol, allowing users to coordinate in ninja-like stealth right from where it all begins: a group chat. By leveraging familiar mechanics and applications already in use, it enables both web3 natives and newcomers to easily start a DAO. 

### Installation

#### Requirements:

- node v14.17.0 (`nvm` helps to install and use a proper version)

To run the project
1. Use `@BotFather` bot in Telegram to create your own bot. 
2. Copy a provided token and bot name
3. Copy `.env.example` file and replace BOT_TOKEN, BOT_NAME and REACT_APP_URL
```bash
$ cp .env.example .env # copy an example of environment variables to your local file
```
4. Run a server
```bash
$ yarn # install all of the dependencies
$ yarn build # compiles project to a /dist folder
$ yarn start # run a project 
```

For Development use

```bash
$ yarn dev # watches changes and restarts a server automatically
```

## Deployment

### Prepare
1. Install [Docker Desktop](https://docs.docker.com/desktop/install/windows-install/)
2. Enable Kubernetes support in Docker
3. Switch Docker to Linux Containers
4. Download [Lens](https://k8slens.dev/)
5. Ask Konstantin to add your in DigitalOcean
6. Go to [DigitalOcean](https://cloud.digitalocean.com/)
7. Go to the Kubernetes tab
8. Select cluster k8s-1-22-11-do-0-ams3-1657091918583
9. Go to it and select actions in the right corner, then Download config
10. Open Lens and click the Add Cluster button
11. In Lens find the path to your Kubernetes config
12. Open the Kubernetes config on your PC and open the one downloaded from DigitalOcean
13. Transfer data about the cluster, user to the appropriate sections of your config
14. In Lens, select the desired context - do-ams3-k8s-1-22-11-do-0-ams3-1657091918583

### Build and deploy docker image
1. Go to [DigitalOcean](https://cloud.digitalocean.com/account/api/tokens)
2. Create a new token with an infinite lifetime
3. Open console and type *docker login registry.digitalocean.com*
4. Use the token as a username and password
5. Then in the console go to the directory with the project
6. Cleare .env file
7. In the console run `docker build . -t nindao/tg-bot`
8. Run `docker tag nindao/tg-bot registry.digitalocean.com/nindao-registry/nindao-tg-bot:latest`
9. Run `docker push registry.digitalocean.com/nindao-registry/nindao-tg-bot:latest`

### Deploy bot
1. Follow instructions to create a bot https://github.com/nindao/nin-js-bot via @BotFather on Telegram
2. Go to the console in the project folder
3. Run `helm install nindao-tg-bot ./ci/nin-js-bot-tg --set volumePermissions.enabled=true --set BOT_TOKEN=<your token> --set BOT_NAME=<your bot name> --set SERVER_PORT=3005 --set REACT_APP_URL=<your UI> --set API_HOST=<api host> --set imageCredentials.username=<registry token> --set imageCredentials.password=<registry token>`
4. Go to Lens and open Workloads -> Deployments. Here must be created new deploymen named `nindao-tg-bot-deployment`  

Note: if you have installed helm chart you should use `helm upgrade` command instead of `helm install`