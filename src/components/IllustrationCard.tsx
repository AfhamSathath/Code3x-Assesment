import React from 'react';
import { Box, Typography, Card, Chip } from '@mui/material';

export const IllustrationCard: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: { xs: 480, md: 620 },
        bgcolor: '#EAF4EC',
        borderRadius: '32px',
        p: { xs: 3, sm: 5, md: 6 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top Floating Avatar 1 */}
      <Box
        sx={{
          position: 'absolute',
          top: '12%',
          left: '10%',
          width: 52,
          height: 52,
          borderRadius: '50%',
          border: '2px solid #000000',
          bgcolor: '#C1E7CD',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
          zIndex: 3,
        }}
      >
        <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="12" r="7" stroke="#000000" strokeWidth="2" fill="#FFE0B2"/>
          <path d="M7 32C7 25 12 21 18 21C24 21 29 25 29 32" stroke="#000000" strokeWidth="2" fill="#6BC48A"/>
          <path d="M14 10C14 10 16 7 20 8" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </Box>

      {/* Main Graphics Container */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 440,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Floating "Canva Design" Task Badge Card */}
        <Card
          elevation={0}
          sx={{
            position: 'absolute',
            top: '48%',
            left: '0%',
            transform: 'translateY(-50%)',
            bgcolor: '#FFFFFF',
            borderRadius: '18px',
            p: 2,
            px: 2.2,
            border: '1.5px solid #E4E4E7',
            boxShadow: '0 12px 28px rgba(0, 0, 0, 0.08)',
            zIndex: 4,
            minWidth: 165,
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#18181B', fontSize: '0.875rem' }}>
            Canva Design
          </Typography>
          <Typography variant="caption" sx={{ color: '#71717A', display: 'block', mb: 1, fontSize: '0.75rem' }}>
            10 Task
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
            {/* Circular progress badge 84% */}
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                border: '3px solid #6BC48A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#F4FBF6',
              }}
            >
              <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.7rem', color: '#18181B' }}>
                84%
              </Typography>
            </Box>
          </Box>

          <Chip
            label="Design"
            size="small"
            variant="outlined"
            sx={{
              height: 22,
              fontSize: '0.7rem',
              fontWeight: 600,
              borderRadius: '12px',
              borderColor: '#D4D4D8',
              color: '#3F3F46',
            }}
          />
        </Card>

        {/* Floating Avatar 2 (Bottom Right) */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '22%',
            right: '4%',
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: '2px solid #000000',
            bgcolor: '#FDE68A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            zIndex: 3,
          }}
        >
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="13" r="6.5" stroke="#000000" strokeWidth="2" fill="#FFCC80"/>
            <path d="M8 32C8 26 12 22 18 22C24 22 28 26 28 32" stroke="#000000" strokeWidth="2" fill="#38BDF8"/>
            <path d="M12 9C12 9 14 6 22 8" stroke="#000000" strokeWidth="2"/>
          </svg>
        </Box>

        {/* Lotus Meditating Person Vector Illustration */}
        <Box sx={{ width: '100%', maxWidth: 360, my: 'auto', position: 'relative' }}>
          <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
            {/* Thought/Concentration Green Wavy Loop */}
            <path
              d="M100 160 C90 100 140 50 200 50 C270 50 310 90 290 150 C280 180 240 220 200 220 C160 220 110 200 100 160 Z"
              stroke="#6BC48A"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              fill="none"
            />
            <path
              d="M130 180 C110 130 150 80 200 80 C260 80 280 120 270 170 C260 210 230 240 190 230"
              stroke="#4ADE80"
              strokeWidth="2"
              fill="none"
            />

            {/* Floating leaf icon */}
            <path d="M210 35 Q225 15 240 35 Q225 55 210 35 Z" fill="#6BC48A" stroke="#000000" strokeWidth="1.5"/>

            {/* Person Head & Hair */}
            <path d="M170 135 C170 105 230 105 230 135 C230 165 170 165 170 135 Z" fill="#18181B"/>
            <circle cx="200" cy="145" r="16" fill="#FFD1B3" stroke="#000000" strokeWidth="2"/>
            {/* Eyes closed in meditation */}
            <path d="M192 143 Q196 147 200 143" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            <path d="M204 143 Q208 147 212 143" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            {/* Gentle smile */}
            <path d="M197 152 Q202 156 207 152" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>

            {/* Person Body & Arms in lotus meditation posture */}
            <path d="M175 168 C160 185 155 210 165 240 L235 240 C245 210 240 185 225 168 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
            
            {/* Heart symbol on chest */}
            <path d="M194 185 C194 180 200 178 200 184 C200 178 206 180 206 185 C206 191 200 195 200 197 C200 195 194 191 194 185 Z" stroke="#6BC48A" strokeWidth="2" fill="none"/>

            {/* Crossed Legs (Lotus Pose) */}
            <path d="M140 260 C140 235 180 235 200 245 C220 235 260 235 260 260 C260 275 220 275 200 268 C180 275 140 275 140 260 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>

            {/* Open Hands Mudra gesture */}
            <circle cx="145" cy="235" r="6" fill="#FFD1B3" stroke="#000000" strokeWidth="1.5"/>
            <circle cx="255" cy="235" r="6" fill="#FFD1B3" stroke="#000000" strokeWidth="1.5"/>
            <path d="M150 235 L170 215" stroke="#000000" strokeWidth="2"/>
            <path d="M250 235 L230 215" stroke="#000000" strokeWidth="2"/>
          </svg>
        </Box>
      </Box>

      {/* Bottom Carousel Indicator Dots & Tagline */}
      <Box sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
        {/* Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 2.5 }}>
          <Box
            sx={{
              width: 20,
              height: 7,
              borderRadius: '4px',
              bgcolor: '#18181B',
            }}
          />
          <Box
            sx={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              bgcolor: '#A1A1AA',
            }}
          />
          <Box
            sx={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              bgcolor: '#A1A1AA',
            }}
          />
        </Box>

        {/* Tagline */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1rem', sm: '1.2rem' },
            color: '#18181B',
            lineHeight: 1.4,
            maxWidth: 340,
            mx: 'auto',
          }}
        >
          Make your work easier and organized with{' '}
          <Box component="span" sx={{ fontWeight: 800 }}>
            Tuga's App
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};
