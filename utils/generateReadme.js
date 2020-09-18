function generateReadme(data) {
    const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbb9`;
    return `
    # ${data.title}
    
    ## Description
    ${data.description}
    
    ## Table of Contents
    - [Installation](#Installation)
    - [Usage](#usage)
    - [License](#license)
    - [Test] (#tests)
    - [Contributors](#contributors)
    - [Details](#details)
    
    ## Installation
    Packages required to run this program are: ${data.installation}

    ## Usage
    Examples of how to use this program: ${data.usage}

    ## License
    ${data.license}

    ## Tests
    To test, run the following program: ${data.test}

    ## Contributors
    ${data.contributor}

    ## Contact
    \n![Badge](${gitHub})
    \nIf you have questions, contact the developer at: ${data.email}`

}
module.exports = generateReadme;