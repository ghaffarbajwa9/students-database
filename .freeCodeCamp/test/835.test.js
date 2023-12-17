const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested variable added correctly', async () => {
    const scriptFile = await getFileContents('../insert_data.sh');
    const test1 = /MAJOR_ID[\s\S]*MAJOR_ID=\$\([ \t]*\$PSQL[ \t]*"SELECT[ \t]+major_id[ \t]+FROM[ \t]+majors[ \t]+WHERE[ \t]+major[ \t]*=[ \t]*'\$MAJOR'[ \t]*;?[ \t]*"[ \t]*\)[\s\S]*fi[\s\S]*fi[\s\S]*done/gi.test(scriptFile)
    const test2 = /INSERT_MAJOR_RESULT[\s\S]*MAJOR_ID=\$\([ \t]*\$PSQL[\s\S]*'\$MAJOR'/g.test(scriptFile);

    assert(test1 && test2);
  });
});
