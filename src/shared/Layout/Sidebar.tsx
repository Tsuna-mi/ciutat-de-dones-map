import { ToggleButton } from './ToggleButton';
import { motion } from 'framer-motion';

export function Sidebar({
  getButtonProps,
  onToggle,
  isOpen,
  asideWidth,
  getDisclosureProps,
  hidden,
  setHidden,
}: {
  getButtonProps: any;
  onToggle: any;
  isOpen: boolean;
  asideWidth: number;
  getDisclosureProps: any;
  hidden: boolean;
  setHidden: any;
}) {
  return (
    <>
      <ToggleButton
        getButtonProps={getButtonProps}
        onToggle={onToggle}
        isOpen={isOpen}
        asideWidth={asideWidth}
      />
      <motion.section
        {...getDisclosureProps()}
        hidden={hidden}
        initial={false}
        onAnimationStart={() => setHidden(false)}
        onAnimationComplete={() => setHidden(!isOpen)}
        animate={{
          width: isOpen ? asideWidth : 0,
        }}
        style={{
          background: '#5A3B5D',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'absolute',
          left: '0',
          height: '100%',
          minHeight: '100vh',
          top: '0',
        }}
      >
        welcome home
      </motion.section>
    </>
  );
}
