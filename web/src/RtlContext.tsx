
export interface RtlState {
  rtl: boolean;
  setRtl: (rtl: boolean) => void;
}

export const RtlContext = React.createContext<RtlState>({
  rtl: false,
  setRtl: () => {
    throw new Error('setRtl not implemented');
  },
});
