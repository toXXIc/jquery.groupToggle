beforeEach(function() {
  this.addMatchers({
    
    toBeGroupToggle: function() {
      var elem = this.actual[0];
      return !!($.data(elem, 'groupToggle'));
    },
    
    
    toBeJqueryWithSelector: function (requiredSelector) {
        return this.actual instanceof jQuery && 
               this.actual.selector == requiredSelector;
    },
    
    
    toBeChecked: function () {
        var $elem = this.actual, checkedCount = 0;
        
        $elem.each(function() { if (this.checked) checkedCount++ });
        return checkedCount == $elem.length;
    },
    
    
    toBeUnchecked: function () {
        var $elem = this.actual, uncheckedCount = 0;
        
        $elem.each(function() { if (!this.checked) uncheckedCount++ });
        return uncheckedCount == $elem.length;
    }
  });
});




beforeEach(function() {
    var $testBody = $('<div id="test-body"></div>').appendTo('body');
    $('<input type="checkbox" id="group_toggle1" class="group-toggle" />').appendTo($testBody);
    $('<input type="checkbox" id="group_toggle2" class="group-toggle" />').appendTo($testBody);

    // Append several groups of checkboxes.
    var $group1 = $('<div id="group1"></div>').appendTo($testBody);
    var $group2 = $('<div id="group2"></div>').appendTo($testBody);

    var i = 1;
    while (i++ <= 3)
        $('<input type="checkbox" class="chk" id="group1_check' + i + '" />').appendTo($group1);

    i = 1;
    while (i++ <= 5)
        $('<input type="checkbox" class="chk" id="group2_check' + i + '" />').appendTo($group2);


});


afterEach(function() {
    $('#test-body').remove();
});
