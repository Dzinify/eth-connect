import f = require('./formatters')
import { SolidityType } from './type'

/**
 * SolidityTypeReal is a prootype that represents real type
 * It matches:
 * real
 * real[]
 * real[4]
 * real[][]
 * real[3][]
 * real[][6][], ...
 * real32
 * real64[]
 * real8[4]
 * real256[][]
 * real[3][]
 * real64[][6][], ...
 */
export class SolidityTypeReal extends SolidityType {
  constructor() {
    super({
      inputFormatter: f.formatInputReal,
      outputFormatter: f.formatOutputReal
    })
  }

  // tslint:disable-next-line:prefer-function-over-method
  isType(name) {
    return !!name.match(/real([0-9]*)?(\[([0-9]*)\])?/)
  }
}
