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

        // stage('E2E Test') {
        //     steps {
        //         bat 'npx cypress run'
        //     }
        // }
        stage('Register'){
            steps {
                bat 'npx cypress run --env grepTags="@register"'
            }
        }

        stage('Login'){
            steps {
                bat 'npx cypress run --env grepTags="@login"'
            }
        }
    }
}
