pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

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
                bat 'yarn cypress run'
            }
        }

        // stage('Archive Test Reports') {
        //     steps {
        //         archiveArtifacts artifacts: 'cypress/reports/html/**/*', fingerprint: true
        //     }
        // }
}
}
