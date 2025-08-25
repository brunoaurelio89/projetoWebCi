pipeline {
    agent any

    stages {
        stage('Install Yarn') {
            steps {
                bat 'npm install -g yarn'
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'yarn install'
            }
        }

        stage('E2E Test') {
            steps {
                bat 'npx cypress run'
            }
        }
    
    }
}
