"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { X, Star, Users, Bed, Bath, Home, ChevronLeft, ChevronRight, Droplet, Shirt, UtensilsCrossed, Wifi, Thermometer, Tv, Shield, Car, ChevronDown, ChevronUp } from "lucide-react"
import { useState, useEffect, useRef } from "react"

interface PropertyDetailModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PropertyDetailModal({ open, onOpenChange }: PropertyDetailModalProps) {
  const { t, language } = useLanguage()
  
  // Custom handler to ensure scroll position is maintained when closing
  const handleOpenChange = (newOpen: boolean) => {
    if (newOpen && !open) {
      // Modal is opening - store scroll position NOW before anything else happens
      savedScrollPositionRef.current = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      onOpenChange(newOpen)
    } else if (!newOpen && open) {
      // Modal is closing - ensure we restore scroll position
      const scrollY = savedScrollPositionRef.current
      
      // Call the original onOpenChange
      onOpenChange(newOpen)
      
      // Restore scroll position - try to use Lenis if available, otherwise use native scroll
      const restoreScroll = () => {
        // Try to find Lenis instance (it's stored on window)
        const lenis = (window as any).lenis
        
        if (lenis && typeof lenis.scrollTo === 'function') {
          // Use Lenis scrollTo with immediate flag to bypass smooth scroll
          lenis.scrollTo(scrollY, { immediate: true })
        } else {
          // Fallback to native scroll methods
          window.scrollTo(0, scrollY)
          document.documentElement.scrollTop = scrollY
          document.body.scrollTop = scrollY
        }
      }
      
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        restoreScroll()
        // Try multiple times to override any other scroll behavior
        setTimeout(restoreScroll, 50)
        setTimeout(restoreScroll, 100)
        setTimeout(restoreScroll, 200)
        setTimeout(restoreScroll, 300)
        setTimeout(restoreScroll, 500)
        setTimeout(restoreScroll, 700)
      })
      
      // Also add a scroll listener to prevent any scroll-to-top behavior
      const preventScrollToTop = (e: Event) => {
        const lenis = (window as any).lenis
        if (lenis && typeof lenis.scrollTo === 'function') {
          lenis.scrollTo(scrollY, { immediate: true })
        } else {
          window.scrollTo(0, scrollY)
        }
      }
      
      // Listen for scroll events and restore position if it changes
      const scrollInterval = setInterval(() => {
        const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
        if (Math.abs(currentScroll - scrollY) > 10) {
          restoreScroll()
        }
      }, 50)
      
      // Clear interval after modal animation completes
      setTimeout(() => {
        clearInterval(scrollInterval)
        document.removeEventListener('scroll', preventScrollToTop)
      }, 1000)
      
      document.addEventListener('scroll', preventScrollToTop, { passive: false })
    } else {
      onOpenChange(newOpen)
    }
  }
  
  // Prevent body scroll when modal is open - using position fixed method for better reliability
  useEffect(() => {
    if (open) {
      // Store original scroll position BEFORE opening modal - use multiple methods to ensure accuracy
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      savedScrollPositionRef.current = scrollY
      const body = document.body
      
      // Lock body scroll by setting position fixed
      body.style.position = 'fixed'
      body.style.top = `-${savedScrollPositionRef.current}px`
      body.style.width = '100%'
      body.style.overflow = 'hidden'
      
      return () => {
        // Restore original values
        body.style.position = ''
        body.style.top = ''
        body.style.width = ''
        body.style.overflow = ''
        
        // Restore scroll position after modal closes
        // Use requestAnimationFrame and multiple delays to ensure scroll restoration happens
        // after the modal close animation completes and overrides any other scroll behavior
        const scrollY = savedScrollPositionRef.current
        
        const restoreScroll = () => {
          // Try to use Lenis if available
          const lenis = (window as any).lenis
          if (lenis && typeof lenis.scrollTo === 'function') {
            lenis.scrollTo(scrollY, { immediate: true })
          } else {
            // Fallback to native scroll methods
            window.scrollTo(0, scrollY)
            document.documentElement.scrollTop = scrollY
            document.body.scrollTop = scrollY
          }
        }
        
        requestAnimationFrame(() => {
          restoreScroll()
          // Try multiple times to override any other scroll behavior
          setTimeout(restoreScroll, 50)
          setTimeout(restoreScroll, 100)
          setTimeout(restoreScroll, 200)
          setTimeout(restoreScroll, 300)
          setTimeout(restoreScroll, 500)
          setTimeout(restoreScroll, 700)
        })
        
        // Also monitor and prevent scroll-to-top for a short period
        const savedScrollY = savedScrollPositionRef.current
        const monitorInterval = setInterval(() => {
          const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
          if (Math.abs(currentScroll - savedScrollY) > 10) {
            const lenis = (window as any).lenis
            if (lenis && typeof lenis.scrollTo === 'function') {
              lenis.scrollTo(savedScrollY, { immediate: true })
            } else {
              window.scrollTo(0, savedScrollY)
              document.documentElement.scrollTop = savedScrollY
              document.body.scrollTop = savedScrollY
            }
          }
        }, 50)
        
        // Clear monitoring after 1 second
        setTimeout(() => {
          clearInterval(monitorInterval)
        }, 1000)
      }
    }
  }, [open])
  
  // Prevent wheel events from propagating to body when modal is open
  useEffect(() => {
    if (!open) return
    
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement
      const dialogContent = target.closest('[data-slot="dialog-content"]') as HTMLElement
      
      // If the event is not within the dialog content, prevent it
      if (!dialogContent || !dialogContent.contains(target)) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      
      // Use the ref if available, otherwise find the scrollable content
      const scrollableContent = scrollableContentRef.current || dialogContent.querySelector('.overflow-y-auto') as HTMLElement
      if (!scrollableContent) return
      
      // Check if we can scroll in the desired direction
      const { scrollTop, scrollHeight, clientHeight } = scrollableContent
      const isAtTop = scrollTop <= 0
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1
      
      // Only prevent if we're at boundaries and trying to scroll further
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }
    
    // Use capture phase to catch events before they bubble to body
    document.addEventListener('wheel', handleWheel, { passive: false, capture: true })
    
    return () => {
      document.removeEventListener('wheel', handleWheel, { capture: true } as any)
    }
  }, [open])
  
  // Get property data from translations
  const translations = require("@/translations/index").translations
  const property = translations[language as "fr" | "en"].properties.property
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [showFullAccommodation, setShowFullAccommodation] = useState(false)
  const scrollableContentRef = useRef<HTMLDivElement>(null)
  const savedScrollPositionRef = useRef<number>(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  // Icon mapping for amenities categories
  const amenityIcons: Record<string, any> = {
    bathroom: Droplet,
    bedroomAndLinen: Shirt,
    kitchenAndDining: UtensilsCrossed,
    internetAndOffice: Wifi,
    heatingAndAC: Thermometer,
    entertainment: Tv,
    homeSafety: Shield,
    parkingAndFacilities: Car,
  }

  // Truncate text function
  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + "..."
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="!max-w-5xl sm:!max-w-5xl max-h-[90vh] overflow-hidden flex flex-col" onPointerDown={(e) => e.stopPropagation()}>
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold title-font title-tall title-thin">{property.title}</DialogTitle>
        </DialogHeader>
        <div 
          ref={scrollableContentRef}
          className="overflow-y-auto flex-1 -mx-6 px-6"
          onWheel={(e) => {
            // Stop propagation to prevent body scroll
            e.stopPropagation()
          }}
        >

        {/* Image Gallery */}
        <div className="relative w-full h-96 mb-6 rounded-lg overflow-hidden">
          <Image
            src={property.images[currentImageIndex] || "/placeholder.svg"}
            alt={`${property.title} - Image ${currentImageIndex + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
          {property.images.length > 1 && (
            <>
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      currentImageIndex === index ? "bg-white w-8" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Thumbnail Gallery */}
        {property.images.length > 1 && (
          <div className="grid grid-cols-5 gap-2 mb-6">
            {property.images.slice(0, 5).map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  currentImageIndex === index ? "border-primary" : "border-transparent"
                }`}
              >
                <Image src={image} alt={`Thumbnail ${index + 1}`} fill className="object-cover" sizes="80px" loading="lazy" />
              </button>
            ))}
          </div>
        )}

        {/* Basic Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-muted-foreground mb-2">{property.type}</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                {property.location}
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                {property.guests}
              </span>
              <span className="flex items-center gap-2">
                <Bed className="h-4 w-4" />
                {property.bedrooms} • {property.beds}
              </span>
              <span className="flex items-center gap-2">
                <Bath className="h-4 w-4" />
                {property.bathrooms}
              </span>
            </div>
          </div>
          <div className="flex justify-end">
            <a href={property.airbnbUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-black dark:bg-white hover:bg-black/90 dark:hover:bg-white/90 text-white dark:text-black rounded-full font-semibold">
                {t("properties.viewOnAirbnb")}
              </Button>
            </a>
          </div>
        </div>

        {/* Highlights */}
        <div className="border-t pt-6 mb-6">
          <h3 className="text-xl font-bold mb-4 title-font title-tall title-thin">{t("properties.modalHighlights")}</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-1 title-font title-tall title-thin">{property.highlights.checkin}</h4>
              <p className="text-muted-foreground text-sm">{property.highlights.checkinDesc}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 title-font title-tall title-thin">{property.highlights.location}</h4>
              <p className="text-muted-foreground text-sm">{property.highlights.locationDesc}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 title-font title-tall title-thin">{property.highlights.superhost}</h4>
              <p className="text-muted-foreground text-sm">{property.highlights.superhostDesc}</p>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="border-t pt-6 mb-6">
          <h3 className="text-xl font-bold mb-4 title-font title-tall title-thin">{t("properties.modalAbout")}</h3>
          <p className="text-muted-foreground mb-2 text-justify whitespace-pre-line">{property.about}</p>
          <div>
            <p className="text-muted-foreground mb-3 text-justify">
              {showFullDescription ? property.aboutExtended : truncateText(property.aboutExtended, 250)}
            </p>
            {property.aboutExtended.length > 250 && (
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-primary hover:underline font-medium flex items-center gap-1"
              >
                {showFullDescription ? (
                  <>
                    {language === "fr" ? "Voir moins" : "Show less"}
                    <ChevronUp className="h-4 w-4 text-primary" />
                  </>
                ) : (
                  <>
                    {language === "fr" ? "Voir plus" : "Read more"}
                    <ChevronDown className="h-4 w-4 text-primary" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Accommodation Details */}
        <div className="border-t pt-6 mb-6">
          <h3 className="text-xl font-bold mb-4 title-font title-tall title-thin">{t("properties.modalAccommodation")}</h3>
          <div>
            <p className="text-muted-foreground whitespace-pre-line mb-3 text-justify">
              {showFullAccommodation ? property.accommodation : truncateText(property.accommodation, 300)}
            </p>
            {property.accommodation.length > 300 && (
              <button
                onClick={() => setShowFullAccommodation(!showFullAccommodation)}
                className="text-primary hover:underline font-medium flex items-center gap-1"
              >
                {showFullAccommodation ? (
                  <>
                    {language === "fr" ? "Voir moins" : "Show less"}
                    <ChevronUp className="h-4 w-4 text-primary" />
                  </>
                ) : (
                  <>
                    {language === "fr" ? "Voir plus" : "Read more"}
                    <ChevronDown className="h-4 w-4 text-primary" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Ratings */}
        <div className="border-t pt-6 mb-6">
          <h3 className="text-xl font-bold mb-4 title-font title-tall title-thin">{t("properties.modalRatings")}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.values(property.ratings).map((rating: any, index: number) => (
              <div key={index} className="flex flex-col gap-2 p-4 border rounded-lg bg-gray-50/50 dark:bg-muted/50 border-border dark:border-border">
                <span className="font-medium text-sm">{rating.label}</span>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                  <span className="font-bold text-lg">{rating.score.toFixed(1)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="border-t pt-6 mb-6">
          <h3 className="text-xl font-bold mb-4 title-font title-tall title-thin">{t("properties.modalAmenities")}</h3>
          <div className="space-y-6">
            <div>
              {(() => {
                const Icon = amenityIcons.bathroom
                return (
                  <h4 className="font-semibold mb-3 flex items-center gap-2 title-font title-tall title-thin">
                    <Icon className="h-5 w-5 text-primary" />
                    {property.amenities.bathroom}
                  </h4>
                )
              })()}
              <ul className="list-disc list-inside text-muted-foreground space-y-1.5 ml-7">
                {property.amenities.bathroomItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              {(() => {
                const Icon = amenityIcons.bedroomAndLinen
                return (
                  <h4 className="font-semibold mb-3 flex items-center gap-2 title-font title-tall title-thin">
                    <Icon className="h-5 w-5 text-primary" />
                    {property.amenities.bedroomAndLinen}
                  </h4>
                )
              })()}
              <ul className="list-disc list-inside text-muted-foreground space-y-1.5 ml-7">
                {property.amenities.bedroomAndLinenItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              {(() => {
                const Icon = amenityIcons.kitchenAndDining
                return (
                  <h4 className="font-semibold mb-3 flex items-center gap-2 title-font title-tall title-thin">
                    <Icon className="h-5 w-5 text-primary" />
                    {property.amenities.kitchenAndDining}
                  </h4>
                )
              })()}
              <ul className="list-disc list-inside text-muted-foreground space-y-1.5 ml-7">
                {property.amenities.kitchenAndDiningItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              {(() => {
                const Icon = amenityIcons.internetAndOffice
                return (
                  <h4 className="font-semibold mb-3 flex items-center gap-2 title-font title-tall title-thin">
                    <Icon className="h-5 w-5 text-primary" />
                    {property.amenities.internetAndOffice}
                  </h4>
                )
              })()}
              <ul className="list-disc list-inside text-muted-foreground space-y-1.5 ml-7">
                {property.amenities.internetAndOfficeItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              {(() => {
                const Icon = amenityIcons.heatingAndAC
                return (
                  <h4 className="font-semibold mb-3 flex items-center gap-2 title-font title-tall title-thin">
                    <Icon className="h-5 w-5 text-primary" />
                    {property.amenities.heatingAndAC}
                  </h4>
                )
              })()}
              <ul className="list-disc list-inside text-muted-foreground space-y-1.5 ml-7">
                {property.amenities.heatingAndACItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              {(() => {
                const Icon = amenityIcons.entertainment
                return (
                  <h4 className="font-semibold mb-3 flex items-center gap-2 title-font title-tall title-thin">
                    <Icon className="h-5 w-5 text-primary" />
                    {property.amenities.entertainment}
                  </h4>
                )
              })()}
              <ul className="list-disc list-inside text-muted-foreground space-y-1.5 ml-7">
                {property.amenities.entertainmentItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              {(() => {
                const Icon = amenityIcons.homeSafety
                return (
                  <h4 className="font-semibold mb-3 flex items-center gap-2 title-font title-tall title-thin">
                    <Icon className="h-5 w-5 text-primary" />
                    {property.amenities.homeSafety}
                  </h4>
                )
              })()}
              <ul className="list-disc list-inside text-muted-foreground space-y-1.5 ml-7">
                {property.amenities.homeSafetyItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              {(() => {
                const Icon = amenityIcons.parkingAndFacilities
                return (
                  <h4 className="font-semibold mb-3 flex items-center gap-2 title-font">
                    <Icon className="h-5 w-5 text-primary" />
                    {property.amenities.parkingAndFacilities}
                  </h4>
                )
              })()}
              <ul className="list-disc list-inside text-muted-foreground space-y-1.5 ml-7">
                {property.amenities.parkingAndFacilitiesItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Comments */}
        {property.comments && property.comments.length > 0 && (
          <div className="border-t pt-6 mb-6">
            <h3 className="text-xl font-bold mb-4 title-font title-tall title-thin">{t("properties.modalComments")}</h3>
            <div className="space-y-4">
              {property.comments.map((comment: any, index: number) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold">{comment.name}</p>
                      <p className="text-sm text-muted-foreground">{comment.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: comment.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
