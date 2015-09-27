/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */

import SystemException = require('./SystemException');


const NAME:string = 'InvalidOperationException';

class InvalidOperationException extends SystemException {

	protected getName():string
	{
		return NAME;
	}

}

export = InvalidOperationException
