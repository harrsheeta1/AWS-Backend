# AWS-Backend
Step 1: Log in to AWS Management Console
Go to the AWS Management Console.
Log in with your credentials.
Step 2: Navigate to the EC2 Dashboard
In the Services menu, search for and select EC2.
You will be directed to the EC2 Dashboard.
Step 3: Launch an EC2 Instance
Click "Launch Instance":

Click the Launch Instance button on the EC2 Dashboard.
Configure the Instance:

Name: Give your instance a name (e.g., "MyWebServer").
AMI (Amazon Machine Image): Select an Amazon Linux 2 AMI (or any OS of your choice).
Instance Type: Select t2.micro (free-tier eligible).
Key Pair:
If you already have a key pair, select it.
If not, create a new one and download the .pem file. Keep it secure; you will need it to connect to the instance.
Network Settings:
Open port 22 (for SSH access).
Open port 3000 or 80 if you're hosting a web app.
Leave other settings as default and click Launch Instance.
Wait for Instance to Start:

Go back to the EC2 dashboard, and you'll see your instance in the list.
Wait until the status changes to Running.
Step 4: Connect to Your EC2 Instance
Connect via SSH:

Open a terminal (Linux/Mac) or use an SSH client like PuTTY (Windows).
Use the .pem file downloaded earlier to connect.
Example command:

bash
Copy code
ssh -i /path/to/your-key.pem ec2-user@your-ec2-public-ip
Replace /path/to/your-key.pem with the path to your .pem file and your-ec2-public-ip with the public IP of your EC2 instance (available in the EC2 dashboard under Public IP).

Configure the Instance:

Update the instance and install required software:
bash
Copy code
sudo yum update -y
sudo yum install -y git curl
Install Node.js (if hosting a Node.js app):

bash
Copy code
curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo yum install -y nodejs
Step 5: Deploy Your Application
Upload your application files to the EC2 instance (e.g., using SCP or git). Example using scp:

bash
Copy code
scp -i /path/to/your-key.pem local-file ec2-user@your-ec2-public-ip:/path/to/target-directory
Start your application on the EC2 instance. Example for a Node.js app:

bash
Copy code
node server.js
Access Your Application:

Use the EC2 Public IP in your browser (e.g., http://<public-ip>:3000).
Step 6: Keep Your App Running (Optional)
Use a process manager like PM2 to keep your app running even after the terminal is closed:

bash
Copy code
sudo npm install -g pm2
pm2 start server.js
