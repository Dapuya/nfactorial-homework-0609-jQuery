

$(document).ready(function (){
    $('storyFrame').hide();

    $('button').click(function (){
        let name = $('#width').val();
        let character = $('#height').val();
        let adverb = $('#colors').val();
        let bit_depth = Math.ceil((name * character/ adverb)/ 1000);

        document.getElementById('story').innerHTML = '<h3>File is ' + bit_depth + 'KB which is ok</h3> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Thumbs-up-icon.svg/1200px-Thumbs-up-icon.svg.png" alt="thumb" width="100px">';
    })
})

