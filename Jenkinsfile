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
    
        stage('Roda Cypress Reports') {
            steps {
                bat 'npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports/html,overwrite=false,html=true,savejson=true'
            }
        }

        stage('Publicar Reports') {
            steps {
                script {
                    def reportsDir = "${WORKSPACE}/reports"
                    def cypressReport = "${WORKSPACE}/cypress/reports/html/index.html"
                    def targetReport = "${reportsDir}/index.html"

                    if (!fileExists(reportsDir)) {
                        bat "mkdir -p ${reportsDir}"
                    }

                    if (fileExists(cypressReport)) {
                        bat "cp -r ${cypressReport} ${targetReport}"
                    }
                }
            }
        }

        stage('Publicacao do Reports no Jenkins'){
            steps {
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'reports',
                    reportFiles: 'index.html',
                    reportName: 'Relatorio Cypress'
                ])
            }
        }

    }
    post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, icon: '', keepAll: true, reportDir: 'reports', reportFiles: 'index.html', reportName: 'Reports Tests', reportTitles: 'Reports E2E', useWrapperFileDirectly: true])
        }
    }
}
