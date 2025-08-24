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
                bat 'yarn cypress run'
            }
        }
    
        stage('Roda Cypress Reports') {
            steps {
                bat 'npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports/html,overwrite=false,html=true,json=false'
            }
        }

        stage ('Analisa se existe pasta e relatório'){
            steps{
                scripts{
                    def reportsDir = "${WORKSPACE}/reports"
                    def cypressReport = "${WORKSPACE}/cypress/reports/html/index.html"
                    def targetReport = "${reportsDir}/index.html"

                    // Cria a pasta reports se não existir
                    if (!fileExists(reportsDir)) {
                        echo "Criando pasta de reports..."
                        new File(reportsDir).mkdirs()
                    }

                    // Se o Cypress gerou relatório, copia
                    if (fileExists(cypressReport)) {
                        echo "Copiando relatório do Cypress para reports/"
                        sh "cp ${cypressReport} ${targetReport}"
                    } else {
                        // Se não existir, cria um placeholder
                        echo "Nenhum relatório encontrado, criando placeholder..."
                        writeFile file: targetReport, text: """
                            <html>
                                <head><title>Relatório Vazio</title></head>
                                <body><h2>Nenhum relatório do Cypress foi gerado.</h2></body>
                            </html>
                        """
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
