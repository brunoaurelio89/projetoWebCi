pipeline {
    agent { label 'ubuntu-latest' }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Yarn') {
            steps {
                sh 'npm install -g yarn'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'yarn'
            }
        }

        stage('E2E Test') {
            steps {
                sh 'yarn cypress run'
            }
        }

        stage('Archive Test Reports') {
            steps {
                archiveArtifacts artifacts: 'cypress/reports/html/**/*', fingerprint: true
            }
        }
}
