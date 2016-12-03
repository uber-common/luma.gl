const modifierEventKeyMap = {
  Alt: 'altKey',
  Control: 'ctrlKey',
  Meta: 'metaKey',
  Shift: 'shiftKey'
};

export default function createGetModifierState(rawEvent) {
  return function getModifierState(modifierKeyName) {
    if (rawEvent.getModifierState) {
      return rawEvent.getModifierState(modifierKeyName);
    }
    const modifierEventKey = modifierEventKeyMap[modifierKeyName];
    if (modifierEventKey) {
      return rawEvent[modifierEventKey] || false;
    }
    return false;
  };
}
