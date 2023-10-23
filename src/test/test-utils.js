/**
 * cannot be compiled under --isolatedModules because it is considered a global script file.
 * Add an import, export, or an empty export {} statement to make it a module.
 */
const empty = () => 0;
export default empty;