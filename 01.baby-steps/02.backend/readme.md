use java 17
sudo apt install openjdk-17-jre-headless

use gradle

sudo apt  install gradle
sudo apt remove gradle
wget https://services.gradle.org/distributions/gradle-7.5-bin.zip
sudo unzip -d /opt/gradle gradle-7.5-bin.zip
nano ~/.bashrc
ctrol + end > ctrl + v
export PATH=$PATH:/opt/gradle/gradle-7.5/bin

source ~/.bashrc