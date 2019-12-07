// By Roy Curtis
// Based off original code from https://github.com/calumr/flurry

// Constants
var MAX_SMOKE   = 1800, // Originally 3600
    MAX_ANGLES  = 16384,
    BIG_MYSTERY = 1800;

/**
 * The global object and namespace for the Flurry application
 */
var Flurry = {};

/** @type {Flurry.Renderer} */
Flurry.renderer = null;
/** @type {Stats} */
Flurry.stats = null;
/** @type {dat.GUI} */
Flurry.gui = null;

/**
 * Entry point for Flurry
 */
Flurry.main = function()
{
    console.log("[Main] Setting up renderer...");
    Flurry.renderer = new Flurry.Renderer('renderer');
    Flurry.renderer.useShader('vertexShader');
    Flurry.renderer.useShader('fragShader');
    Flurry.renderer.setup();
    window.addEventListener('resize', function() { Flurry.renderer.resize(); }, false);

    console.log("[Main] Setting up GLSaver...");
    Flurry.GLSaver.setup();

    console.log("[Main] Done! Beginning render loop...");
    Flurry.GLSaver.render();

    Flurry.renderer.canvas.width  = 0;
    Flurry.renderer.canvas.height = 0;
    Flurry.renderer.resize();

    // Fix for Firefox issue with preserveDrawingBuffer
    window.setTimeout(function(){
        Flurry.renderer.canvas.width  = 0;
        Flurry.renderer.canvas.height = 0;
        Flurry.renderer.resize();
    }, 100);

    Flurry.renderer.canvas.ondblclick = function()
    {
        var b = document.body;
        // Fullscreen API is currently vendor prefixed
        if      (b.requestFullscreen)       b.requestFullscreen();
        else if (b.mozRequestFullScreen)    b.mozRequestFullScreen();
        else if (b.webkitRequestFullscreen) b.webkitRequestFullscreen();
        else if (b.msRequestFullScreen)     b.msRequestFullScreen();
    };
};

Flurry.toggleStats = function(v)
{
    if (v)
        Flurry.stats.begin();
    else
        Flurry.stats.end();

    Flurry.stats.domElement.style.display = v ? "block" : "none";
};
