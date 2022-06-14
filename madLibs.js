$(document).ready(function (){
    $('storyFrame').hide();

    $('button').click(function (){
        let name = $('#personName').val();
        let character = $('#character').val();
        let adverb = $('#adverb').val();
        let adjective = $('#adjective').val();
        let titleHTML = '<h1>' + name + "'s" +' Amazing Adventure</h1>';
        let storyHTML= '<h3>One day, ' + name + ' went for a walk and saw ' + adjective + ' ' + character + '. ' + name +  ' run ' + adverb + ' to say hello and hug. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, cupiditate deserunt dolor ea enim esse et fugit itaque iure magni molestias nam perspiciatis quas quasi quod reiciendis veritatis? Minima, nihil? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi debitis deserunt distinctio dolorem dolores non placeat, quisquam ullam ut veritatis voluptas voluptatibus. Earum eos nihil nisi, sequi tempora veritatis?</h3>';

        document.getElementById('storyTitle').innerHTML = titleHTML;
        document.getElementById('story').innerHTML = storyHTML;
    })
})

