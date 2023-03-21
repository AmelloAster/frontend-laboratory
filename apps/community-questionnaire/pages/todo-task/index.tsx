import { Button, Text } from 'ui/next-ui';
import { tw } from 'ui/typewind';

export default function Docs() {
  return (
    <main>
      <Text
        className={tw.text_center.my_6}
        h1
        size={24}
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
        }}
      >
        FEC Architectural Todo Task
      </Text>
    </main>
  );
}
