
const createId = require('../../../utils/createId');

const analyseEmpty = (entity, scope) => {

  const {
    start,
    type,
    end
  } = entity;

  const id = createId(type);
  scope.addSegment(id, start, end);

  return [id];
};

module.exports = analyseEmpty;