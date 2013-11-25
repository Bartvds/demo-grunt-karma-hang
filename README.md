# demo-grunt-karma-hang

Quick demo to show how `grunt-karma` hangs under `grunt v0.4.2` when redirecting output

From both folders install `grunt` + `grunt-karma`

    $ npm install
    
Run demos:

    // do nothing and pass
    $ grunt

    // wait async, then pass task
    $ grunt build
    
    // wait async, then fail task
    $ grunt test

These will all exit as expected for both versions.

Now redirect output:

	$ grunt build>foo.txt

It will hang indefinitely on `grunt 0.4.2` but pass on `grunt 0.4.1`
