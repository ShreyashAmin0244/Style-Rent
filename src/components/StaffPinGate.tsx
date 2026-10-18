import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Unlock, 
  KeyRound, 
  AlertCircle, 
  ArrowLeft, 
  Sparkles, 
  Database, 
  PackageCheck,
  Eye,
  EyeOff
} from 'lucide-react';

interface StaffPinGateProps {
  targetSection: 'admin' | 'database';
  onAuthenticated: () => void;
  onCancel: () => void;
}

export const STAFF_PIN = '996946';

export const StaffPinGate: React.FC<StaffPinGateProps> = ({
  targetSection,
  onAuthenticated,
  onCancel,
}) => {
  const [pinDigits, setPinDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const sectionTitle = targetSection === 'admin' 
    ? 'Admin & Staff Inventory Control' 
    : 'Relational Database Studio & SQL Explorer';

  const sectionIcon = targetSection === 'admin' ? PackageCheck : Database;
  const IconComponent = sectionIcon;

  // Auto-focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleDigitChange = (index: number, value: string) => {
    // Only accept numeric inputs
    const cleanVal = value.replace(/\D/g, '');
    if (!cleanVal) {
      const newDigits = [...pinDigits];
      newDigits[index] = '';
      setPinDigits(newDigits);
      setErrorMessage('');
      return;
    }

    // Support pasting multi-character string
    if (cleanVal.length > 1) {
      const chars = cleanVal.slice(0, 6).split('');
      const newDigits = [...pinDigits];
      chars.forEach((c, i) => {
        if (i < 6) newDigits[i] = c;
      });
      setPinDigits(newDigits);
      setErrorMessage('');
      
      if (newDigits.join('').length === 6) {
        verifyPin(newDigits.join(''));
      } else {
        const nextIdx = Math.min(chars.length, 5);
        inputRefs.current[nextIdx]?.focus();
      }
      return;
    }

    const newDigits = [...pinDigits];
    newDigits[index] = cleanVal[cleanVal.length - 1];
    setPinDigits(newDigits);
    setErrorMessage('');

    // Advance to next input
    if (index < 5 && cleanVal) {
      inputRefs.current[index + 1]?.focus();
    }

    // If all 6 digits entered, verify automatically
    const fullPin = newDigits.join('');
    if (fullPin.length === 6) {
      verifyPin(fullPin);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !pinDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'Enter') {
      const fullPin = pinDigits.join('');
      verifyPin(fullPin);
    }
  };

  const verifyPin = (candidatePin: string) => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      if (candidatePin === STAFF_PIN) {
        setErrorMessage('');
        onAuthenticated();
      } else {
        setErrorMessage('Incorrect PIN. Access denied. Please enter 996946.');
        // Highlight error by resetting
        inputRefs.current[0]?.focus();
      }
    }, 250);
  };

  const handleAutoFill = () => {
    const chars = STAFF_PIN.split('');
    setPinDigits(chars);
    setErrorMessage('');
    verifyPin(STAFF_PIN);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-[#FAF7F2] rounded-3xl max-w-md w-full shadow-2xl border border-[#DFCBB5] overflow-hidden text-stone-800">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-[#450A18] via-[#6B1D2F] to-[#450A18] p-6 text-white text-center relative border-b border-[#E6CA85]/20">
          <button
            onClick={onCancel}
            className="absolute top-4 left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all text-xs flex items-center gap-1 cursor-pointer"
            title="Go back"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </button>

          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#E6CA85]/20 border border-[#E6CA85]/40 flex items-center justify-center shadow-inner mb-3">
            <Lock className="w-7 h-7 text-[#E6CA85]" />
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#E6CA85] uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Restricted Security Area</span>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl font-bold mt-1 text-white">
            Staff & Admin Authentication
          </h2>
          
          <p className="text-xs text-stone-300 mt-1 max-w-xs mx-auto">
            Access to <strong>{sectionTitle}</strong> is protected. Please enter the authorized PIN to proceed.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Demo PIN Badge */}
          <div className="bg-[#F8F4ED] border border-[#DFCBB5] rounded-2xl p-3.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <KeyRound className="w-4 h-4 text-[#8C6D46] shrink-0" />
              <div>
                <span className="font-semibold text-stone-800 block">Required Security PIN:</span>
                <span className="font-mono font-bold text-[#6B1D2F] text-sm tracking-wider">
                  996946
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAutoFill}
              className="px-3 py-1.5 rounded-xl bg-[#6B1D2F] hover:bg-[#521321] text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1 cursor-pointer hover:scale-105"
            >
              <Sparkles className="w-3 h-3 text-[#E6CA85]" />
              <span>Fill PIN 996946</span>
            </button>
          </div>

          {/* 6 Digit Input Boxes */}
          <div className="space-y-3">
            <label className="block text-center text-xs font-semibold uppercase tracking-wider text-stone-500">
              Enter 6-Digit Password / PIN
            </label>

            <div className="flex justify-center gap-2 sm:gap-2.5">
              {pinDigits.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => { inputRefs.current[idx] = el; }}
                  type={showPin ? 'text' : 'password'}
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleDigitChange(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  className={`w-11 h-13 sm:w-12 sm:h-14 text-center text-xl sm:text-2xl font-bold font-mono rounded-xl border transition-all outline-hidden ${
                    digit 
                      ? 'bg-white border-[#6B1D2F] text-[#6B1D2F] ring-2 ring-[#6B1D2F]/20' 
                      : 'bg-stone-50 border-stone-300 text-stone-900 focus:bg-white focus:border-[#6B1D2F] focus:ring-2 focus:ring-[#6B1D2F]/20'
                  } ${errorMessage ? 'border-rose-500 bg-rose-50/50' : ''}`}
                />
              ))}
            </div>

            {/* Show/Hide PIN toggle */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setShowPin(!showPin)}
                className="text-[11px] text-stone-500 hover:text-stone-800 flex items-center gap-1 font-medium transition-colors cursor-pointer"
              >
                {showPin ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showPin ? 'Hide PIN characters' : 'Show PIN characters'}</span>
              </button>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-center gap-2 animate-shake">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-2 pt-1">
            <button
              type="button"
              disabled={isVerifying}
              onClick={() => verifyPin(pinDigits.join(''))}
              className="w-full py-3.5 bg-[#450A18] hover:bg-[#340712] text-[#E6CA85] font-bold text-sm rounded-xl shadow-lg border border-[#E6CA85]/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer"
            >
              <Unlock className="w-4 h-4 text-[#E6CA85]" />
              <span>{isVerifying ? 'Verifying PIN...' : 'Authenticate & Unlock'}</span>
            </button>

            <button
              type="button"
              onClick={onCancel}
              className="w-full py-2.5 bg-transparent hover:bg-stone-200/50 text-stone-600 font-semibold text-xs rounded-xl transition-all cursor-pointer"
            >
              Cancel & Return to Browsing
            </button>
          </div>

          {/* Footer College Project Note */}
          <div className="text-[11px] text-center text-stone-400 border-t border-stone-200 pt-3">
            Academic Project Security Demo • PIN is configured to <strong>996946</strong>
          </div>

        </div>

      </div>
    </div>
  );
};
