pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/JenilSavalia/jenkins-pipeline-testing-nodejs.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Check') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Run') {
            steps {
                sh 'nohup node server.js > app.log 2>&1 &'
            }
        }
    }
}
