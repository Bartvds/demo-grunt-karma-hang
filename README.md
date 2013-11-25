# demo-grunt-karma-hang

Quick demo to show how `grunt-karma` hangs under `grunt v0.4.2` when redirecting output

From both folders install `grunt` + `grunt-karma`

    $ npm install
    
Run demos:

    $ grunt test

These will all exit as expected for both versions.

Now redirect output and see if it hangs:

	$ grunt build>foo.txt


