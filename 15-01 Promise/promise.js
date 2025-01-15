// function executerFunction() { }

// const promiseObject = new Promise(executerFunction);

// const promiseObject = new Promise((resolve, reject) =>
// {
//     setTimeout(() =>
//     {
//         if (false)
//         {
//             resolve('Success');
//         }
//         else
//         {
//             reject("error")
//         }
//     }, 2500)

// });
// console.log(promiseObject);
// promiseObject.then(resolveHandler, rejectHandler);

// promiseObject.then(resolveHandler).catch(rejectHandler);

// function returnsPromise(age)
// {
//     return new Promise((resolve, reject) =>
//     {
//         if (age < 18)
//         {
//             resolve("Age is less than 18! You can enter");
//         }
//         else
//         {
//             reject("Age is greater than 18! you cann't enter");
//         }
//     })
// }

// returnsPromise(12).then(resolveHandler).catch(rejectHandler);

// function resolveHandler(value)
// {
//     console.log(value);
// }

// function rejectHandler(error)
// {
//     console.error(error);
// }


// function getUser(userName, callback)
// {
//     console.log("User detail fetched from dataabase");
//     callback("U00251");
// }

// function getPost(userId, callback)
// {
//     console.log("Post fetched of " + userId);
//     callback("P001");
// }

// function getComment(postId, callback)
// {
//     console.log("Comment fetched of " + postId);
//     callback(["Comment1", "Comment2", "Comment3"]);
// }

// getUser("Abc", (userId) =>
// {
//     getPost(userId, (postId) =>
//     {
//         getComment(postId, (comments) =>
//         {
//             console.log(comments);
//         })
//     })
// })

function getUser(userName)
{
    return new Promise((resolve, reject) =>
    {
        console.log("User detail fetched from dataabase");
        resolve("U00251");
    })
}

function getPost(userId)
{
    return new Promise((resolve, reject) =>
    {
        console.log("User detail fetched from dataabase for " + userId);
        resolve("P001");
    })
}

function getComment(postId, callback)
{
    return new Promise((resolve, reject) =>
    {
        console.log("Comment fetched of " + postId);
        resolve(["Comment1", "Comment2", "Comment3"]);
    })
}

getUser("abc")
    .then((userId) => getPost(userid))
    .then((postId) => getComment(postId))
    .then((comments) => console.log(comments))
    .catch((error) => console.error(error))
    .finally(() => console.log("Process completed"));
// async function getComments()
// {
//     try
//     {
//         const userId = await getUers("abc");
//         const postId = await getPost(userId);
//         const comments = await getComment(postId);
//         console.log(comments)
//     }
//     catch (err)
//     {
//         console.error(err);
//     }
// }