#!/bin/bash

# Update and upgrade packages
sudo yum update -y

# Install ruby and wget for CodeDeploy agent
sudo yum install ruby -y
sudo yum install wget

# Install AWS CodeDeploy agent
cd /home/ec2-user
wget https://aws-codedeploy-us-east-1.s3.us-east-1.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto

# Install Node.js (adjust version as needed)
curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -
sudo yum install -y nodejs

# Install pm2 globally
sudo npm install -g pm2
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ec2-user --hp /home/ec2-user

# Create a directory for your application
mkdir /sns/sns-api

# Create the systemd service unit file
sudo tee /etc/systemd/system/sns-api.service > /dev/null <<EOT
[Unit]
Description=SNS Api Node.js Application

[Service]
ExecStart=/usr/bin/node /sns/sns-api/dist/main.js
WorkingDirectory=/sns/sns-api
Restart=always
User=ec2-user
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOT

# Enable and start the systemd service
sudo systemctl enable sns-api.service
sudo systemctl start sns-api.service