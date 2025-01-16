const verifyEmailTemplate = ({name, url}) => {
    return `
      <html>
            <body>
                <p>Dear ${name},</p>
                <p>Please click the link below to verify your email:</p>
                <a href="${url} style="color:black;background :orange;margin-top : 10px,padding:20px,display:block">
                Verify Email
                </a>
            </body>
        </html>
    `

  }
  

  export default verifyEmailTemplate