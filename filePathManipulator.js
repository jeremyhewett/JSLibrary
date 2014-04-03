function filePathManipulator() {

    var parts,
        separator,
        regex = /[\/\\]/;

    function trimArray(array) {
        while(array.length > 0 && !array[0]) {
            array.shift();
        }

        while(array.length > 0 && !array[array.length - 1]) {
            array.pop();
        }

        return array;
    }

    function splitFileName(fileName) {
        var fileNameParts = parts[parts.length - 1].split(".");
        var last = fileNameParts.pop();
        return fileNameParts.length > 0 ? [fileNameParts.join("."), last] : [last];
    }

    var filePath = {

        pathString: function(string) {
            if(arguments.length < 1) return parts.join(separator);
            separator = string.match(regex)[0];
            parts = trimArray(string.split(regex));
            return filePath;
        },

        fileNameWithoutExtension: function(name) {
            var fileNameParts = splitFileName(parts[parts.length - 1]);
            if(arguments.length < 1) return fileNameParts[0];
            fileNameParts[0] = name;
            parts[parts.length - 1] = fileNameParts.join(".");
            return filePath;
        },

        fileExtension: function(newEextension) {
            var fileNameParts = splitFileName(parts[parts.length - 1]);
            var extension = fileNameParts.length > 1 ? fileNameParts.pop() : "";
            if(arguments.length < 1) return extension;
            fileNameParts.push(newEextension);
            parts[parts.length - 1] = fileNameParts.join(".");
            return filePath;
        }
    };

    return filePath;
}