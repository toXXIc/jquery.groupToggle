About
=====

groupToggle is a jQuery plugin that makes a toggle from any DOM element 
that checks/unchecks groups of checkboxes. 

Fetaures:

* can make a toggle from any element (checkbox, button, span etc.)
* updates the state of the toggle when specified group of checkboxes is 
  checked or unchecked
* provides methods to check or uncheck specified group of checkboxes


Usage
-----

```js

    // Create a group toggle for checkboxes specified by a filter
    $('#group_toggle1').groupToggle('.group1');
    // The same as:
    $('#group_toggle1').groupToggle({filter: '.group1'});   

    // Create a group toggle for checkboxes by specifying their parent element
    $('#group_toggle2_1').groupToggle({groupParent: 'div#chk_group1'});
    
    // Non-checkbox elements can be used as a group toggle, in that case
    // additional classes can be specified to customise the toggle 
    // appearance in its different states.
    $('span.toggle_btn').groupToggle({
        groupParent: $('div#chk_group2'), // jQuery object also can be used as a parent
        toggleOnClass: 'toggleOn',
        toggleOffClass: 'toggleOff'
    });
    
    
    // Check the whole gorup
    $('#group_toggle').groupToggle('check');
    
    // Uncheck the whole group
    $('#group_toggle').groupToggle('uncheck');
    
    // Update the group and refresh the toggle state
    $('#group_toggle').groupToggle('update');

```

You can see the demo in examples.html.


Plugin options
--------------

`filter`
*Optional. Default: `null`.*
Specifies filter which is applied to selected checkbox inputs.


`groupParent`
*Optional. Default: `null`.*
Specifies a parent for the group of checkboxes. All checkboxes will be 
selected only within specified parent element. This parmeter can be either 
a css selector or a jQuery object.


`toggleOffClass`
*Optional. Default: `""`.*
Specifies a class which will be added to non-checkbox toggle element when it's unchecked.


`toggleOnClass`
*Optional. Default: `"checked"`.*
Specifies a class which will be added to non-checkbox toggle element when it's checked.


Plugin methods
--------------

`check`
Checks all checkboxes of the group.

`uncheck`
Unchecks all group checkboxes.

`update`
Updates the list of checkboxes in the group (see `filter` and `groupParent` 
options). Method also updates the toggle state according to the state 
of the whole group of checkboxes.