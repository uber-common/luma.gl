export default class Resource {
  readonly id: string;
  readonly gl: WebGLRenderingContext;
  readonly gl2: WebGL2RenderingContext;
  readonly _handle: any;

  get handle(): any;

  constructor(gl: WebGLRenderingContext, opts?: {});
  toString(): string;
<<<<<<< HEAD
  get handle(): any;
  delete({deleteChildren}?: {deleteChildren?: boolean}): this;
=======
  delete({ deleteChildren }?: { deleteChildren?: boolean }): this;
>>>>>>> feat(webgl): typescript typings
  bind(funcOrHandle?: any): any;
  unbind(): void;
  /**
   * Query a Resource parameter
   *
   * @param {GLenum} pname
   * @return {GLint|GLfloat|GLenum} param
   */
  getParameter(pname: any, opts?: {}): any;
  getParameters(opts?: {}): {};
  /**
   * Update a Resource setting
   *
   * @todo - cache parameter to avoid issuing WebGL calls?
   *
   * @param {GLenum} pname - parameter (GL constant, value or key)
   * @param {GLint|GLfloat|GLenum} value
   * @return {Resource} returns self to enable chaining
   */
  setParameter(pname: any, value: any): this;
  setParameters(parameters: any): this;
  stubRemovedMethods(className: any, version: any, methodNames: any): void;
  initialize(opts: any): void;

  _trackAllocatedMemory(bytes: number, name?: string): void;
  _trackDeallocatedMemory(name?: string): void;
}
