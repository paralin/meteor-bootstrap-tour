# Bootstrap Tour

*[Bootstrap Tour](http://bootstraptour.com/) repackaged for meteor. Check that site for detailed examples!*

## Example usage

    var tour = new Tour();
    tour.addStep({
        element: "", // string - html element next to which the step popover should be shown
        title: "", // string - title of the popover
        content: "" // string - content of the popover
    });
    tour.start();