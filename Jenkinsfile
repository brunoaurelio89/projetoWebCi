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
        stage('Geração do relatório'){
            steps {
                publishHTML(target: [
                    reportDir: 'reports/html',       // pasta onde está o relatório
                    reportFiles: 'index.html',       // arquivo principal do relatório
                    reportName: 'Relatório de Testes', // nome que aparece na aba do Jenkins
                    keepAll: true,                   // para manter histórico de builds antigos deve estar marcado como true
                    alwaysLinkToLastBuild: true,     // link direto para último relatório
                    allowMissing: false              // essa condição faz com que tudo sempre fique rodando
                ])
            }
        }

    }
    post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, icon: '', keepAll: true, reportDir: '', reportFiles: 'index.html', reportName: 'Relatório de Testes', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}
