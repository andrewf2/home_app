# home_owner_center
`nvm use 0.12.1` to use correct version of node
`npm install` for initial setup
`gulp dev`    to run the app
Once RethinkDB is installed, run `gulp seed` and wait for query to finish.

Install RethinkDB (on Ubuntu)
    source /etc/lsb-release && echo "deb http://download.rethinkdb.com/apt $DISTRIB_CODENAME main" | sudo tee /etc/apt/sources.list.d/rethinkdb.list
    wget -qO- http://download.rethinkdb.com/apt/pubkey.gpg | sudo apt-key add -
    sudo apt-get update
    sudo apt-get install rethinkdb
    

