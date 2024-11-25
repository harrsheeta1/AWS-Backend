# AWS-Backend
Here’s the content formatted in GitHub README markdown style:

---

# Deploying a Web Application on AWS EC2

Follow these steps to deploy and host your application on AWS EC2.

---

## Step 1: Log in to AWS Management Console

1. Go to the [AWS Management Console](https://aws.amazon.com/console/).
2. Log in with your credentials.

---

## Step 2: Navigate to the EC2 Dashboard

1. In the **Services** menu, search for and select **EC2**.
2. You will be directed to the EC2 Dashboard.

---

## Step 3: Launch an EC2 Instance

1. **Click "Launch Instance"**:
   - Click the **Launch Instance** button on the EC2 Dashboard.
   
2. **Configure the Instance**:
   - **Name**: Give your instance a name (e.g., `"MyWebServer"`).
   - **AMI (Amazon Machine Image)**: Select an **Amazon Linux 2 AMI** (or any OS of your choice).
   - **Instance Type**: Select `t2.micro` (free-tier eligible).
   - **Key Pair**:
     - If you already have a key pair, select it.
     - If not, create a new one and download the `.pem` file. **Keep it secure; you will need it to connect to the instance.**
   - **Network Settings**:
     - Open port `22` (for SSH access).
     - Open port `3000` or `80` if you're hosting a web app.
   - Leave other settings as default and click **Launch Instance**.

3. **Wait for the Instance to Start**:
   - Go back to the EC2 dashboard, and you'll see your instance in the list.
   - Wait until the status changes to **Running**.

---

## Step 4: Connect to Your EC2 Instance

1. **Connect via SSH**:
   - Open a terminal (Linux/Mac) or use an SSH client like **PuTTY** (Windows).
   - Use the `.pem` file downloaded earlier to connect.

   Example command:
   ```bash
   ssh -i /path/to/your-key.pem ec2-user@your-ec2-public-ip
   ```
   Replace:
   - `/path/to/your-key.pem` with the path to your `.pem` file.
   - `your-ec2-public-ip` with the **public IP** of your EC2 instance (available in the EC2 dashboard under **Public IP**).

2. **Configure the Instance**:
   - Update the instance and install required software:
     ```bash
     sudo yum update -y
     sudo yum install -y git curl
     ```

3. **Install Node.js (if hosting a Node.js app)**:
   ```bash
   curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -
   sudo yum install -y nodejs
   ```

---

## Step 5: Deploy Your Application

1. **Upload your application files to the EC2 instance**:
   - Use `scp` or `git` to upload your application files.

   Example using `scp`:
   ```bash
   scp -i /path/to/your-key.pem local-file ec2-user@your-ec2-public-ip:/path/to/target-directory
   ```

2. **Start your application on the EC2 instance**:
   Example for a Node.js app:
   ```bash
   node server.js
   ```

3. **Access Your Application**:
   - Use the EC2 **Public IP** in your browser:
     ```
     http://<public-ip>:3000
     ```

---

## Step 6: Keep Your App Running (Optional)

1. **Install PM2**:
   ```bash
   sudo npm install -g pm2
   ```

2. **Start your app using PM2**:
   ```bash
   pm2 start server.js
   ```

3. PM2 will ensure your application stays running even if the terminal session is closed.

---




