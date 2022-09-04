export async function GetPost(sub: String, SetPost: Function) {
    const response = await fetch(`https://www.reddit.com/r/${sub}/hot.json?limit=100`);
    const responseJSON = await response.json();
    
    if (responseJSON.error) {
        throw new Error(`Error: ${responseJSON.error}`);
    }

    const posts = responseJSON.data.children.map(child => child.data);
    let post = posts[Math.floor(Math.random() * posts.length)];
    post.url = post.url.replace('gifv', 'gif');

    if (post === null) {
        throw new Error("No post found");
    };

    SetPost(post);
}