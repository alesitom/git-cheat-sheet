export const gitList = [
    {
        category: "Git Directory",
        command:"",
        description:"The .git directory is where Git stores the metadata and object database for the repository"
    },
    {
        category: "Working Directory",
        command:"",
        description:"A copy of one version of the git project, taken from compressed database in the .git directory"
    },
    {
        category: "Staging Area/Index",
        command:"",
        description:"File that stores information about what will next be committed into the git repository"
    },
    {
        category: "Save Fragments",
        command:"git stash",
        description:"Temporarily stores all modified tracking files"
    },
    {
        category: "Save Fragments",
        command:"git stash save [message]",
        description:"Save local modifications to a new stash"
    },
    {
        category: "Save Fragments",
        command:"git stash pop",
        description:"Restores the most recently stashed files"
    },
    {
        category: "Save Fragments",
        command:"git stash list",
        description:"Lists all stashed changesets"
    },
    {
        category: "Save Fragments",
        command:"git stash show",
        description:"Show the changes recorded in the stash"
    },
    {
        category: "Save Fragments",
        command:"git stash drop",
        description:"Discards the most recently stashed changeset"
    },
    {
        category: "Working Directory",
        command:"",
        description:"A copy of one version of the git project, taken from compressed database in the .git directory"
    },
    {
        category: "Review History",
        command:"git log",
        description:"Lists version history for the current branch"
    },
    {
        category: "Review History",
        command:"git log --follow [file]",
        description:"Lists version history for a file, including renames"
    },
    {
        category: "Review History",
        command:"git diff [first-branch]...[second-branch]",
        description:"Shows content differences between two branches"
    },
    {
        category: "Review History",
        command:"git show [commit]",
        description:"Outputs metadata and content changes of the specified commit"
    },

]