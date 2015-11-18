/**
 * Type definitions for use by WebStorm to fix their incomplete/buggy
 * WebGL definitions
 */

/**
 * Represents a shader used by WebGL
 */
var WebGLShader = {};

/**
 * Represents a shader program used by WebGL
 */
var WebGLProgram = {};

/**
 * Represents a texture used by WebGL
 */
var WebGLTexture = {};

/**
 * Represents an index location of a shader program's uniform
 */
var WebGLUniformLocation = {};

/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DEPTH_BUFFER_BIT = 0x00000100;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_BUFFER_BIT = 0x00000400;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.COLOR_BUFFER_BIT = 0x00004000;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.POINTS = 0x0000;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.LINES = 0x0001;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.LINE_LOOP = 0x0002;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.LINE_STRIP = 0x0003;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TRIANGLES = 0x0004;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TRIANGLE_STRIP = 0x0005;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TRIANGLE_FAN = 0x0006;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ZERO = 0;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ONE = 1;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.SRC_COLOR = 0x0300;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ONE_MINUS_SRC_COLOR = 0x0301;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.SRC_ALPHA = 0x0302;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ONE_MINUS_SRC_ALPHA = 0x0303;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DST_ALPHA = 0x0304;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ONE_MINUS_DST_ALPHA = 0x0305;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DST_COLOR = 0x0306;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ONE_MINUS_DST_COLOR = 0x0307;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.SRC_ALPHA_SATURATE = 0x0308;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FUNC_ADD = 0x8006;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BLEND_EQUATION = 0x8009;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BLEND_EQUATION_RGB = 0x8009;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BLEND_EQUATION_ALPHA = 0x883D;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FUNC_SUBTRACT = 0x800A;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FUNC_REVERSE_SUBTRACT = 0x800B;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BLEND_DST_RGB = 0x80C8;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BLEND_SRC_RGB = 0x80C9;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BLEND_DST_ALPHA = 0x80CA;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BLEND_SRC_ALPHA = 0x80CB;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.CONSTANT_COLOR = 0x8001;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ONE_MINUS_CONSTANT_COLOR = 0x8002;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.CONSTANT_ALPHA = 0x8003;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ONE_MINUS_CONSTANT_ALPHA = 0x8004;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BLEND_COLOR = 0x8005;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ARRAY_BUFFER = 0x8892;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ELEMENT_ARRAY_BUFFER = 0x8893;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ARRAY_BUFFER_BINDING = 0x8894;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STREAM_DRAW = 0x88E0;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STATIC_DRAW = 0x88E4;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DYNAMIC_DRAW = 0x88E8;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BUFFER_SIZE = 0x8764;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BUFFER_USAGE = 0x8765;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.CURRENT_VERTEX_ATTRIB = 0x8626;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FRONT = 0x0404;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BACK = 0x0405;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FRONT_AND_BACK = 0x0408;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.CULL_FACE = 0x0B44;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BLEND = 0x0BE2;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DITHER = 0x0BD0;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_TEST = 0x0B90;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DEPTH_TEST = 0x0B71;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.SCISSOR_TEST = 0x0C11;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.POLYGON_OFFSET_FILL = 0x8037;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.SAMPLE_ALPHA_TO_COVERAGE = 0x809E;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.SAMPLE_COVERAGE = 0x80A0;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.NO_ERROR = 0;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.INVALID_ENUM = 0x0500;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.INVALID_VALUE = 0x0501;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.INVALID_OPERATION = 0x0502;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.OUT_OF_MEMORY = 0x0505;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.CW = 0x0900;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.CCW = 0x0901;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.LINE_WIDTH = 0x0B21;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ALIASED_POINT_SIZE_RANGE = 0x846D;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ALIASED_LINE_WIDTH_RANGE = 0x846E;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.CULL_FACE_MODE = 0x0B45;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FRONT_FACE = 0x0B46;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DEPTH_RANGE = 0x0B70;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DEPTH_WRITEMASK = 0x0B72;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DEPTH_CLEAR_VALUE = 0x0B73;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DEPTH_FUNC = 0x0B74;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_CLEAR_VALUE = 0x0B91;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_FUNC = 0x0B92;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_FAIL = 0x0B94;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_PASS_DEPTH_FAIL = 0x0B95;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_PASS_DEPTH_PASS = 0x0B96;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_REF = 0x0B97;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_VALUE_MASK = 0x0B93;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_WRITEMASK = 0x0B98;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_BACK_FUNC = 0x8800;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_BACK_FAIL = 0x8801;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_BACK_REF = 0x8CA3;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_BACK_VALUE_MASK = 0x8CA4;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_BACK_WRITEMASK = 0x8CA5;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.VIEWPORT = 0x0BA2;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.SCISSOR_BOX = 0x0C10;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.COLOR_CLEAR_VALUE = 0x0C22;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.COLOR_WRITEMASK = 0x0C23;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.UNPACK_ALIGNMENT = 0x0CF5;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.PACK_ALIGNMENT = 0x0D05;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.MAX_TEXTURE_SIZE = 0x0D33;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.MAX_VIEWPORT_DIMS = 0x0D3A;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.SUBPIXEL_BITS = 0x0D50;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.RED_BITS = 0x0D52;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.GREEN_BITS = 0x0D53;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BLUE_BITS = 0x0D54;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ALPHA_BITS = 0x0D55;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DEPTH_BITS = 0x0D56;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_BITS = 0x0D57;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.POLYGON_OFFSET_UNITS = 0x2A00;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.POLYGON_OFFSET_FACTOR = 0x8038;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE_BINDING_2D = 0x8069;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.SAMPLE_BUFFERS = 0x80A8;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.SAMPLES = 0x80A9;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.SAMPLE_COVERAGE_VALUE = 0x80AA;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.SAMPLE_COVERAGE_INVERT = 0x80AB;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.NUM_COMPRESSED_TEXTURE_FORMATS = 0x86A2;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.COMPRESSED_TEXTURE_FORMATS = 0x86A3;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DONT_CARE = 0x1100;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FASTEST = 0x1101;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.NICEST = 0x1102;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.GENERATE_MIPMAP_HINT = 0x8192;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BYTE = 0x1400;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.UNSIGNED_BYTE = 0x1401;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.SHORT = 0x1402;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.UNSIGNED_SHORT = 0x1403;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.INT = 0x1404;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.UNSIGNED_INT = 0x1405;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FLOAT = 0x1406;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DEPTH_COMPONENT = 0x1902;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ALPHA = 0x1906;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.RGB = 0x1907;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.RGBA = 0x1908;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.LUMINANCE = 0x1909;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.LUMINANCE_ALPHA = 0x190A;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.UNSIGNED_SHORT_4_4_4_4 = 0x8033;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.UNSIGNED_SHORT_5_5_5_1 = 0x8034;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.UNSIGNED_SHORT_5_6_5 = 0x8363;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FRAGMENT_SHADER = 0x8B30;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.VERTEX_SHADER = 0x8B31;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.MAX_VERTEX_ATTRIBS = 0x8869;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.MAX_VERTEX_UNIFORM_VECTORS = 0x8DFB;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.MAX_VARYING_VECTORS = 0x8DFC;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4C;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.MAX_TEXTURE_IMAGE_UNITS = 0x8872;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DFD;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.SHADER_TYPE = 0x8B4F;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DELETE_STATUS = 0x8B80;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.LINK_STATUS = 0x8B82;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.VALIDATE_STATUS = 0x8B83;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ATTACHED_SHADERS = 0x8B85;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ACTIVE_UNIFORMS = 0x8B86;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ACTIVE_ATTRIBUTES = 0x8B89;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.SHADING_LANGUAGE_VERSION = 0x8B8C;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.CURRENT_PROGRAM = 0x8B8D;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.NEVER = 0x0200;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.LESS = 0x0201;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.EQUAL = 0x0202;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.LEQUAL = 0x0203;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.GREATER = 0x0204;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.NOTEQUAL = 0x0205;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.GEQUAL = 0x0206;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ALWAYS = 0x0207;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.KEEP = 0x1E00;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.REPLACE = 0x1E01;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.INCR = 0x1E02;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DECR = 0x1E03;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.INVERT = 0x150A;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.INCR_WRAP = 0x8507;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DECR_WRAP = 0x8508;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.VENDOR = 0x1F00;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.RENDERER = 0x1F01;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.VERSION = 0x1F02;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.NEAREST = 0x2600;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.LINEAR = 0x2601;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.NEAREST_MIPMAP_NEAREST = 0x2700;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.LINEAR_MIPMAP_NEAREST = 0x2701;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.NEAREST_MIPMAP_LINEAR = 0x2702;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.LINEAR_MIPMAP_LINEAR = 0x2703;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE_MAG_FILTER = 0x2800;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE_MIN_FILTER = 0x2801;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE_WRAP_S = 0x2802;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE_WRAP_T = 0x2803;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE_2D = 0x0DE1;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE = 0x1702;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP = 0x8513;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE_BINDING_CUBE_MAP = 0x8514;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE0 = 0x84C0;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE1 = 0x84C1;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE2 = 0x84C2;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE3 = 0x84C3;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE4 = 0x84C4;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE5 = 0x84C5;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE6 = 0x84C6;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE7 = 0x84C7;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE8 = 0x84C8;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE9 = 0x84C9;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE10 = 0x84CA;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE11 = 0x84CB;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE12 = 0x84CC;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE13 = 0x84CD;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE14 = 0x84CE;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE15 = 0x84CF;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE16 = 0x84D0;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE17 = 0x84D1;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE18 = 0x84D2;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE19 = 0x84D3;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE20 = 0x84D4;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE21 = 0x84D5;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE22 = 0x84D6;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE23 = 0x84D7;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE24 = 0x84D8;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE25 = 0x84D9;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE26 = 0x84DA;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE27 = 0x84DB;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE28 = 0x84DC;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE29 = 0x84DD;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE30 = 0x84DE;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.TEXTURE31 = 0x84DF;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.ACTIVE_TEXTURE = 0x84E0;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.REPEAT = 0x2901;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.CLAMP_TO_EDGE = 0x812F;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.MIRRORED_REPEAT = 0x8370;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FLOAT_VEC2 = 0x8B50;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FLOAT_VEC3 = 0x8B51;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FLOAT_VEC4 = 0x8B52;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.INT_VEC2 = 0x8B53;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.INT_VEC3 = 0x8B54;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.INT_VEC4 = 0x8B55;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BOOL = 0x8B56;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BOOL_VEC2 = 0x8B57;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BOOL_VEC3 = 0x8B58;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BOOL_VEC4 = 0x8B59;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FLOAT_MAT2 = 0x8B5A;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FLOAT_MAT3 = 0x8B5B;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FLOAT_MAT4 = 0x8B5C;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.SAMPLER_2D = 0x8B5E;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.SAMPLER_CUBE = 0x8B60;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.COMPILE_STATUS = 0x8B81;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.LOW_FLOAT = 0x8DF0;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.MEDIUM_FLOAT = 0x8DF1;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.HIGH_FLOAT = 0x8DF2;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.LOW_INT = 0x8DF3;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.MEDIUM_INT = 0x8DF4;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.HIGH_INT = 0x8DF5;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FRAMEBUFFER = 0x8D40;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.RENDERBUFFER = 0x8D41;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.RGBA4 = 0x8056;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.RGB5_A1 = 0x8057;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.RGB565 = 0x8D62;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DEPTH_COMPONENT16 = 0x81A5;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_INDEX = 0x1901;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_INDEX8 = 0x8D48;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DEPTH_STENCIL = 0x84F9;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.RENDERBUFFER_WIDTH = 0x8D42;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.RENDERBUFFER_HEIGHT = 0x8D43;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.RENDERBUFFER_RED_SIZE = 0x8D50;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.RENDERBUFFER_GREEN_SIZE = 0x8D51;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.RENDERBUFFER_BLUE_SIZE = 0x8D52;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.RENDERBUFFER_ALPHA_SIZE = 0x8D53;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.RENDERBUFFER_DEPTH_SIZE = 0x8D54;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.RENDERBUFFER_STENCIL_SIZE = 0x8D55;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.COLOR_ATTACHMENT0 = 0x8CE0;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DEPTH_ATTACHMENT = 0x8D00;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.STENCIL_ATTACHMENT = 0x8D20;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.DEPTH_STENCIL_ATTACHMENT = 0x821A;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.NONE = 0;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_COMPLETE = 0x8CD5;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_UNSUPPORTED = 0x8CDD;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_BINDING = 0x8CA6;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.RENDERBUFFER_BINDING = 0x8CA7;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.MAX_RENDERBUFFER_SIZE = 0x84E8;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.INVALID_FRAMEBUFFER_OPERATION = 0x0506;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.UNPACK_FLIP_Y_WEBGL = 0x9240;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.CONTEXT_LOST_WEBGL = 0x9242;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
/**
 @type {number}
 @const
 */
WebGLRenderingContext.prototype.BROWSER_DEFAULT_WEBGL = 0x9244;