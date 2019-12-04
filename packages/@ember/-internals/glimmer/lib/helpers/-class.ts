import { dasherize } from '@ember/string';
import { CapturedArguments, VM, VMArguments } from '@glimmer/interfaces';
import { HelperRootReference } from '@glimmer/reference';

function classHelper({ positional }: CapturedArguments) {
  let path = positional.at(0);
  let args = positional.length;
  let value = path.value();

  if (value === true) {
    if (args > 1) {
      return dasherize(positional.at(1).value() as string);
    }
    return null;
  }

  if (value === false) {
    if (args > 2) {
      return dasherize(positional.at(2).value() as string);
    }
    return null;
  }

  return value;
}

export default function(args: VMArguments, vm: VM) {
  return new HelperRootReference(classHelper, args.capture(), vm.env);
}
