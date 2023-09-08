node('built-in') {

 try {
        stage('Git Clone') {
          git branch: 'dev', credentialsId: '484dc8b4-be79-42e5-a99a-68ca3a557a1c', url: 'http://10.170.4.68:3450/muchungar/diasporafrontend_client.git'
        }
        
        stage("Docker Build"){
            sh "docker build -t 10.170.4.69:5000/diaspora_insurance-frontend:$BUILD_NUMBER ."
        }
        
         stage("Docker Push"){
            sh "docker push 10.170.4.69:5000/diaspora_insurance-frontend:$BUILD_NUMBER"
        }
        
        stage("Run Docker Image"){
            sh "docker rm -f diaspora_insurance-frontend  && docker run -h fbcdcdoc -p 8044:8044 --name diaspora_insurance-frontend -d 10.170.4.69:5000/diaspora_insurance-frontend:$BUILD_NUMBER"
        }
         /*    stage("Send success email"){
               def mailRecipients = "whatmore.musarurwa@fbc.co.zw"
               emailext body: "$BUILD_NUMBER", subject: 'Jenkins Build Status', to: 'whatmore.musarurwa@fbc.co.zw'
             emailext body: 'Check console output at $BUILD_URL to view the results.', 
                    to: "whatmore.musarurwa@fbc.co.zw", 
                    subject: 'Jenkins build is back to normal: $PROJECT_NAME - #$BUILD_NUMBER'
        }
      stage("Production Deployment Decision"){
            input message: 'Are you sure you want to deploy to Production?', ok: 'Deploy'
        }*/
     
 } catch (e) {
     def mailRecipients = "whatmore.musarurwa@fbc.co.zw"
         emailext body: 'Check console output at $BUILD_URL to view the results. \n\n ${CHANGES} \n\n -------------------------------------------------- \n${BUILD_LOG, maxLines=100, escapeHtml=false}', 
                    to: "${mailRecipients}", 
                    subject: 'Build failed in Jenkins: $PROJECT_NAME - #$BUILD_NUMBER'
     throw e
} finally {
    def mailRecipients = "whatmore.musarurwa@fbc.co.zw"
    def jobName = currentBuild.fullDisplayName
if (currentBuild.currentResult == 'SUCCESS') { 
           emailext body: 'Check console output at $BUILD_URL to view the results.', 
                    to: "${mailRecipients}", 
                    subject: 'Jenkins build is back to normal: $PROJECT_NAME - #$BUILD_NUMBER'

          }
}
}
