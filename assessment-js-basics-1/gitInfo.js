/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = "git is a version control system which allows the user to save iterations of there work regularly. These iterations can be accessed later even if the current file is completely different"
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = "gitHub is basically a social media version of git which allows for the sharing and collaboration of coding projects. It is very useful for team projects where people are working on the same code at the same time."
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = "git init creates a local repository in the current directory. This hidden .git folder will be used to store commited data"
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition = "git clone does as it says, It clones a repository into a new directory. There are definitely more nuances than that, but thats the jist of it"
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition = "git status checks the current status of files in your current directory/staging area. Only works if a repository had been initialized. Basically shows what files have been changed, and what files have been staged to commit"
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition = "git add stages a specified file/files to be committed"
const gitAddCode = "git add ."
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition = "git commit transfers any staged files (add) to the local repository along with a message. This essentially saves a local iteration of your work which can be accessed at a later time"
const gitCommitCode = 'git commit -m "initial commit"'

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition = "git push essentially transfers your local git repository to a gitHub repository. the basic git push only works if the gitHub repository has already been linked to your local repository. If not it will require a few extra commands which gitHub provides"