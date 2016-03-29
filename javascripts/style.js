$(document).ready(function() {  
    //numbering for pre>code blocks
    $(function(){
        $('pre code').each(function(){
            var lines = $(this).text().split('\n').length - 1;
            var $numbering = $('<ul/>').addClass('pre-numbering');
            $(this)
                .addClass('has-numbering')
                .parent()
                .append($numbering);
            for(i=1;i<=lines;i++){
                $numbering.append($('<li/>').text(i));
            }
        });
        
        $('.proof').each(function(){
            $(this).prepend('<div class="proofhead"><i>Proof.</i>&nbsp;&nbsp;</div>');
            $(this).children().last().append('&nbsp;&#x220E;');
        });
        
    });
    
});
