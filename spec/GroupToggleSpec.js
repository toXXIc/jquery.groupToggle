var GROUP_TOGGLE_ID = '#group_toggle1';


function getMainCheck()
{
    return $('#test-body #group_toggle1');
}

function applyPlugin(options)
{
    var toggle = $('#group_toggle1').groupToggle('#group1 input:checkbox', options);
    expect(toggle).toBeGroupToggle();

    return $('#group_toggle1').data('groupToggle');
}









describe("GroupToggle", function() {

    function addCheckbox(aClass) {
        var count = $('#group1 input:checkbox').length;
        $('<input type="checkbox" class="' + aClass + '" />').appendTo($('#group1'));

        var count2 = $('#group1 input:checkbox').length;
        expect(count2).toBe(count + 1);
    }


    
    
    
    describe("jQuery compliance:", function() 
    {    
        it('can be chainable', function() {
            var $chk = getMainCheck();
            $chk.groupToggle().addClass('test-class');
            expect($chk.hasClass('test-class')).toBeTruthy();
        });

        it('can be applied to one element', function() {
            $('#group_toggle1').groupToggle();
            expect($("#group_toggle1")).toBeGroupToggle();
        });

        it('can be applied to more that one element', function()
        {
            $('.group-toggle').groupToggle();
            expect($("#group_toggle1")).toBeGroupToggle();
            expect($("#group_toggle2")).toBeGroupToggle();
        });
    });

    describe("arguments parsing", function() 
    {
        var pluginObj, $toggle;
        function initPlugin(/* arguments */) {
            $toggle = $('#group_toggle1');
            $toggle.groupToggle.apply($toggle, arguments);
            pluginObj = $toggle.data('groupToggle');
        }



        it("treats ('#group1 .chk') as ({filter: '#group1 .chk'}) ", function(){
            initPlugin('#group1 .chk');

            expect(pluginObj.options.filter).toBe('#group1 .chk');
        });


        it('treats second argument as options', function() {
            initPlugin('#group1 .chk', {groupAutoupdate: true, toggleOnClass: 'toggle-on'});

            expect(pluginObj.options.groupAutoupdate).toBeTruthy();
            expect(pluginObj.options.toggleOnClass).toBe('toggle-on');
        });
        
        
        it('converts option "groupParent" into jQuery object', function() {
            initPlugin('.chk', {groupParent: '#group1'});
            
            expect(pluginObj.options.groupParent).toBeJqueryWithSelector('#group1');
        });
        
        
        it('option "groupParent" defaults to $("body")', function() {
            initPlugin('.chk');
            
            expect(pluginObj.options.groupParent).toBeJqueryWithSelector('body');
        });
        
        it('(".chk", {groupParent: "#group1"}) selects only checkboxes within #group1', function() {
            initPlugin('.chk', {groupParent: '#group1'});
            
            // TODO: finish
        });
    });
    
    

    // ---------------
    describe('behavior', function ()
    {
        it('checks and unchecks linked group of checkboxes', function()
        {
            applyPlugin();
            var toggle1 = $('#group_toggle1').click();
            var checkedCount = 0;

            // Test if all checkboxes are checked.
            var group1 = $('#group1 input:checkbox');
            expect(group1).toBeChecked();

            toggle1.click();
            expect(group1).toBeUnchecked();
        });



        it('sets toggle on if applied on checked group', function()
        {
            // Check checkboxes before applying plugin.
            $('#group1 input:checkbox').attr('checked', 'checked');

            applyPlugin();

            expect($('#group_toggle1')[0].checked).toBeTruthy();
        });




        it('sets toggle on when user checked all group', function()
        {
            applyPlugin(); // First apply plugin, then set all checkboxes using click imitation.

            $('#group1 input:checkbox').click();

            expect($('#group_toggle1')[0].checked).toBeTruthy();
        });


        it("sets group checked using method 'check'", function (){
            applyPlugin({groupAutoupdate: true});
            $(GROUP_TOGGLE_ID).groupToggle('check');

            expect($('#group1 input.chk:checkbox')).toBeChecked();
            expect($('#group_toggle1')).toBeChecked();
        });
        
        
        it("sets group unchecked using method 'uncheck'", function (){
            applyPlugin({groupAutoupdate: true});
            $(GROUP_TOGGLE_ID).groupToggle('check').groupToggle('uncheck');

            expect($('#group1 input.chk:checkbox')).toBeUnchecked();
            expect($('#group_toggle1')).toBeUnchecked();
        });
    });
});


