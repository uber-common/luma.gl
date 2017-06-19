const RAW_GITHUB = 'https://raw.githubusercontent.com/uber/luma.gl/master'

export const EXAMPLE_PAGES = [
  {
    name: 'Core Examples',
    children: [
      {
        name: 'Overview',
        content: {
          path: 'markdown/examples.md'
        }
      },
      {
        name: 'Cubemap',
        content: {
          demo: 'CubemapDemo'
        }
      },
      {
        name: 'Custom Picking',
        content: {
          demo: 'CustomPickingDemo',
          path: `${RAW_GITHUB}/examples/core/custom-picking/`
        }
      },
      {
        name: 'Instancing',
        content: {
          demo: 'InstancingDemo'
        }
      },
      {
        name: 'Mandelbrot',
        content: {
          demo: 'MandelbrotDemo'
        }
      },
      {
        name: 'Concentrics',
        content: {
          demo: 'MulticontextDemo'
        }
      },
      {
        name: 'Picking',
        content: {
          demo: 'PickingDemo',
          path: `${RAW_GITHUB}/examples/core/picking/`
        }
      },
      // {
      //   name: 'DeferredRendering',
      //   content: {
      //     demo: 'DeferredRenderingDemo'
      //   }
      // },
      // {
      //   name: 'Particles',
      //   content: {
      //     demo: 'ParticlesDemo'
      //   }
      // },
      // {
      //   name: 'Persistence',
      //   content: {
      //     demo: 'PersistenceDemo'
      //   }
      // },
      // {
      //   name: 'Shadowmap',
      //   content: {
      //     demo: 'ShadowmapDemo'
      //   }
      // },
      {
        name: 'Tranform Feedback',
        content: {
          demo: 'TransformFeedbackDemo'
        }
      }
    ]
  },
  {
    name: 'WebGL Lessons',
    children: [
      {
        name: 'Lesson 01',
        content: {
          demo: 'Lesson01'
        }
      },
      {
        name: 'Lesson 02',
        content: {
          demo: 'Lesson02'
        }
      },
      {
        name: 'Lesson 03',
        content: {
          demo: 'Lesson03'
        }
      },
      {
        name: 'Lesson 04',
        content: {
          demo: 'Lesson04'
        }
      },
      {
        name: 'Lesson 05',
        content: {
          demo: 'Lesson05',
          path: `${RAW_GITHUB}/examples/lessons/05/`
        }
      },
      {
        name: 'Lesson 06',
        content: {
          demo: 'Lesson06',
          path: `${RAW_GITHUB}/examples/lessons/06/`
        }
      },
      {
        name: 'Lesson 07',
        content: {
          demo: 'Lesson07',
          path: `${RAW_GITHUB}/examples/lessons/07/`
        }
      },
      {
        name: 'Lesson 08',
        content: {
          demo: 'Lesson08',
          path: `${RAW_GITHUB}/examples/lessons/08/`
        }
      },
      {
        name: 'Lesson 09',
        content: {
          demo: 'Lesson09',
          path: `${RAW_GITHUB}/examples/lessons/09/`
        }
      },
      // {
      //   name: 'Lesson 10',
      //   content: {
      //     demo: 'Lesson03'
      //   }
      // },
      // {
      //   name: 'Lesson 11',
      //   content: {
      //     demo: 'Lesson03'
      //   }
      // },
      // {
      //   name: 'Lesson 12',
      //   content: {
      //     demo: 'Lesson03'
      //   }
      // },
      // {
      //   name: 'Lesson 13',
      //   content: {
      //     demo: 'Lesson03'
      //   }
      // },
      // {
      //   name: 'Lesson 14',
      //   content: {
      //     demo: 'Lesson03'
      //   }
      // },
      // {
      //   name: 'Lesson 15',
      //   content: {
      //     demo: 'Lesson03'
      //   }
      // },
      {
        name: 'Lesson 16',
        content: {
          demo: 'Lesson16',
          path: `${RAW_GITHUB}/examples/lessons/16/`
        }
      }
    ]
  }
];

export const DOC_PAGES = [
  {
    name: 'Overview',
    children: [
      {
        name: 'Introduction',
        content: 'README.md'
      },
      {
        name: 'What\'s New',
        content: 'whats-new.md'
      },
      {
        name: 'Upgrade Guide',
        content: 'upgrade-guide.md'
      }
    ]
  },
  {
    name: 'Getting Started',
    children: [
      {
        name: 'Overview',
        content: 'get-started/README.md'
      },
      {
        name: 'Installation',
        content: 'get-started/installation.md'
      },
      {
        name: 'Examples',
        content: 'get-started/examples.md'
      },
      {
        name: 'Using with deck.gl',
        content: 'get-started/using-with-deckgl.md'
      },
      {
        name: 'Using with Node.js',
        content: 'get-started/using-with-node.md'
      },
      {
        name: 'Using with other Frameworks',
        content: 'get-started/using-with-other-frameworks.md'
      }
    ]
  },
  {
    name: 'User\'s Guide',
    children: [
      {
        name: 'Overview',
        content: 'user-guide/README.md'
      },
      {
        name: 'Modules',
        content: 'user-guide/modules.md'
      },
      {
        name: 'Debugging',
        content: 'user-guide/debugging.md'
      },
      {
        name: 'WebGL2',
        content: 'user-guide/webgl2.md'
      },
      {
        name: 'GPGPU Programming',
        content: 'user-guide/gpgpu.md'
      }
    ]
  },
  {
    name: 'API Reference',
    children: [
      {
        name: 'Animation Loop',
        content: 'api-reference/core/animation-loop.md'
      },
      {
        name: 'Model',
        content: 'api-reference/core/model.md'
      },
      {
        name: 'Object3d',
        content: 'api-reference/core/object-3d.md'
      },
      {
        name: 'Group',
        content: 'api-reference/core/group.md'
      },
      {
        name: 'Geometry',
        content: 'api-reference/core/geometry.md'
      },
      {
        name: 'Shader Cache',
        content: 'api-reference/shadertools/shader-cache.md'
      },
      {
        name: 'Events Package',
        content: 'api-reference/events/event.md'
      },
      {
        name: 'Picking',
        content: 'api-reference/picking/picking.md'
      }
    ]
  },
  {
    name: 'WebGL Reference',
    children: [
      {
        name: 'Context Management',
        content: 'api-reference/webgl/context.md'
      },
      {
        name: 'Capability Management',
        content: 'api-reference/webgl/context-limits.md'
      },
      {
        name: 'State Management',
        content: 'api-reference/webgl/context-state.md'
      },
      {
        name: 'Buffer',
        content: 'api-reference/webgl/buffer.md'
      },
      // {
      //   name: 'FenceSync (WebGL2)',
      //   content: 'api-reference/webgl/fence-sync.md'
      // },
      {
        name: 'Framebuffer',
        content: 'api-reference/webgl/framebuffer.md'
      },
      {
        name: 'Program',
        content: 'api-reference/webgl/program.md'
      },
      {
        name: 'Query (WebGL2)',
        content: 'api-reference/webgl/query.md'
      },
      {
        name: 'Renderbuffer',
        content: 'api-reference/webgl/renderbuffer.md'
      },
      {
        name: 'Resource',
        content: 'api-reference/webgl/resource.md'
      },
      {
        name: 'Sampler (WebGL2)',
        content: 'api-reference/webgl/sampler.md'
      },
      {
        name: 'Shader',
        content: 'api-reference/webgl/shader.md'
      },
      {
        name: 'Texture',
        content: 'api-reference/webgl/texture.md'
      },
      {
        name: 'Texture2D',
        content: 'api-reference/webgl/texture-2d.md'
      },
      {
        name: 'Texture2DArray (WebGL2)',
        content: 'api-reference/webgl/texture-2d-array.md'
      },
      {
        name: 'Texture3D (WebGL2)',
        content: 'api-reference/webgl/texture-3d.md'
      },
      {
        name: 'TextureCube',
        content: 'api-reference/webgl/texture-cube.md'
      },
      {
        name: 'TransformFeedback (WebGL2)',
        content: 'api-reference/webgl/transform-feedback.md'
      },
      {
        name: 'UniformBufferLayout',
        content: 'api-reference/webgl/uniform-buffer-layout.md'
      },
      {
        name: 'VertexArray (EXT)',
        content: 'api-reference/webgl/vertex-array.md'
      }
    ]
  }
  // ,
  // {
  //   name: 'Advanced',
  //   children: [
  //     {
  //       name: 'Roadmap',
  //       content: 'user-guide/extensions.md'
  //     },
  //     {
  //       name: 'Extensions',
  //       content: 'user-guide/extensions.md'
  //     },
  //   ]
  // }
];
