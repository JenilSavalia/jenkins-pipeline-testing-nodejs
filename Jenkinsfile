pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/<your-username>/crud-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build / Run') {
            steps {
                sh 'echo "Starting App..."'
                sh 'node server.js &'
            }
        }
    }

    post {
        success {
            echo 'Build Successful!'
        }
        failure {
            echo 'Build Failed!'
        }
    }
}