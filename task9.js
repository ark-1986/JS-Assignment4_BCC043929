//Remove all available HTML tags from given string

text1 = "<p><strong><em>Only Print This</em></strong></p>";
remove = text1.replace(/<[^>]*>/g,"");
document.write("Output: " + remove);