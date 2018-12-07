// How many total commits were made in all of Steve's events?

let commitsTotal = 0

githubData.forEach(steveEvent => {
    if(steveEvent.type === "PushEvent") {
    console.log(`Steve event payload commits`, steveEvent.payload.commits.length);
    commitsTotal += steveEvent.payload.commits.length;
    }
})

console.log(`Total Commits:`, commitsTotal);

// How many of each event type? (PullRequestEvent, PushEvent, etc)

//console.table(githubData);        //visually helps us to see the data better

//declare variables:
let eventTypes = {
    PushEvent: 0,
    PullRequestEvent: 0,
    IssueCommentEvent: 0,
    DeleteEvent: 0,
    CreateEvent: 0
}

githubData.forEach(stevent => {
    console.log("type", stevent.type);
    eventTypes[stevent.type] += 1;
})

console.log(eventTypes);

// List all Github users who submitted a pull request that was approved by Steve.
    //We are looking for a user that submitted a pullrequestevent that was approved by Steve
        // payload -> pull_request -> user -> login

        let approvedUsers = [];

        // 


    githubData.forEach(stevent => {                 //"stevent" is the "i" counter; it could be literally anything
        if(stevent.type === "PullRequestEvent") {
        console.log(`users approved?`, stevent.payload.pull_request.user.login);
            if (!approvedUsers.includes(stevent.payload.pull_request.user.login)) {     //The bang means: if NOT approved users ... evaluate
                approvedUsers.push(stevent.payload.pull_request.user.login)

            }
        }
    })
    console.log(`approved users:`, approvedUsers);


// List all repositories on which Steve had an event, and show how many events were on each one.
    //How to target repos? Where are they nested?
    // Probably like the one with the types?
        // repo -> name

    let reposEvents = {
        "nashville-software-school/bangazon-llc": 0,
        "nss-day-cohort-27/brenda-snack-cake-store": 0,
        "nashville-software-school/client-side-mastery": 0,
        "stevebrownlee/vps-setup": 0
    }

    githubData.forEach(eventObj => {
        console.log(`repo name`, eventObj.repo.name);
        reposEvents[eventObj.repo.name] ++;
    })
    console.log(`repos and their events`, reposEvents);

// Which event had the most number of commits?
    //

    let eventsCommits = {}

    githubData.forEach(allEvents => {
        if(allEvents.type === "PushEvent") {
            console.log("The event id as string", allEvents.id, "commits length",
            allEvents.payload.commits.length)
            eventsCommits[allEvents.id] = allEvents.payload.commits.length;
        }
    })
    console.log(`events and their commits`, eventsCommits);


// Which programming langugages were affected by Steve's events?
    // payload -> pull_request -> head -> repo -> language

    githubData.forEach(stevent => {
        if(stevent.type === "PullRequestEvent") {
        console.log(`language?`, stevent.payload.pull_request.head.repo.language);
        }
    })

// What programming language was the most affected by Steve's events?